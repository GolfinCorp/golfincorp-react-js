import { useContext } from 'react';
import { MembersContext } from '@/contexts';
import useAxiosPrivate from './useAxiosPrivate';
import useToastNotification from './useToastNotification';
const useMembers = () => {
  const { members, setMembers } = useContext(MembersContext);
  const { get, post, patch, axiosDelete } = useAxiosPrivate();
  const { handleAsyncToast, handleToast, handleErrorToast } =
    useToastNotification();

  const getMembers = async () => {
    const successMsg = {
      title: 'Exito!',
      description: 'Los usuarios se han cargado correctamente'
    };
    try {
      const membersResponse = members
        ? await get('/members')
        : await handleAsyncToast(
            get('/members'),
            successMsg,
            'Cargando Miembros'
          );
      if (!membersResponse) return;
      setMembers(membersResponse.data.members);
      return membersResponse.data.members;
    } catch (error) {
      handleErrorToast(error);
    }
  };

  const createMember = async (member) => {
    if (!member) {
      handleToast('error', { title: 'Member data is necesary' });
    }
    try {
      const createResponse = await handleAsyncToast(
        post('members', { ...member }),
        {
          title: 'Exito',
          description: `${member.firstName} agregado como miembro`
        },
        'Creando miembro'
      );
      if (!createResponse) return false;
      else {
        getMembers();
        return true;
      }
    } catch (error) {
      handleErrorToast(error);
      return false;
    }
  };

  const updateMember = async (member, id) => {
    if (!member || !id) {
      handleToast('error', { title: 'Member data is necesary' });
    }
    try {
      const updateResponse = await handleAsyncToast(
        patch(`members/${id}`, {
          ...member
        }),
        {
          title: 'Exito',
          description: `Miembro modificado`
        },
        'Modificando Miembro'
      );
      if (!updateResponse) return false;
      else {
        getMembers();
        return true;
      }
    } catch (error) {
      handleErrorToast(error);
      return false;
    }
  };
  const deleteMember = async (id) => {
    if (!id) {
      handleToast('error', { title: 'Member data is necesary' });
    }
    try {
      const updateResponse = await handleAsyncToast(
        axiosDelete(`members/${id}`),
        {
          title: 'Exito',
          description: `Miembro Eliminado`
        },
        'Eliminando miembro'
      );
      if (!updateResponse) return false;
      else {
        getMembers();
        return true;
      }
    } catch (error) {
      handleErrorToast(error);
      return false;
    }
  };
  return {
    getMembers,
    createMember,
    updateMember,
    deleteMember,
    ...useContext(MembersContext)
  };
};

export default useMembers;
