import { useContext } from 'react';
import { MembersContext } from '@/contexts';
import useAxiosPrivate from './useAxiosPrivate';
import useToastNotification from './useToastNotification';
const useMembers = () => {
  const { members, setMembers } = useContext(MembersContext);
  const { get, post } = useAxiosPrivate();
  const { handleAsyncToast, handleToast } = useToastNotification();
  const serverError = {
    title: 'Ha ocurrido un error!',
    description: 'Tuvimos problemas consultando al servidor'
  };
  const getMembers = async () => {
    if (members) return members;
    const successMsg = {
      title: 'Exito!',
      description: 'Los usuarios se han cargado correctamente'
    };
    try {
      const membersResponse = await handleAsyncToast(
        get('/members'),
        successMsg,
        'Cargando Miembros'
      );
      if (!membersResponse) return;
      setMembers(membersResponse.data.members);
      return membersResponse.data.members;
    } catch (error) {
      console.log(error);
      handleToast('error', {
        title: `Ha ocurrido un error ${error.name}`,
        description: `${error.message}`
      });
    }
  };

  const createMember = async (member) => {
    if (!member) {
      handleToast();
    }
  };
  return {
    getMembers,
    createMember,
    ...useContext(MembersContext)
  };
};

export default useMembers;
