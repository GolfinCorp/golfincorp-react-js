import { useContext } from 'react';
import { MembersContext } from '@/contexts';
import useAxiosPrivate from './useAxiosPrivate';
import useToastNotification from './useToastNotification';
const useMembers = () => {
  const { members, setMembers } = useContext(MembersContext);
  const { get, post } = useAxiosPrivate();
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
      if (!createResponse) {
        return false;
      } else {
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
    ...useContext(MembersContext)
  };
};

export default useMembers;
