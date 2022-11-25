import { useContext } from 'react';
import { MembersContext } from '@/contexts';
import useAxiosPrivate from './useAxiosPrivate';

const useMembers = () => {
  const { members, setMembers } = useContext(MembersContext);
  const { get } = useAxiosPrivate();

  const getMembers = async () => {
    if (members) return members;
    const membersResponse = await get('/members');
    setMembers(membersResponse.data.members);
    return membersResponse.data.members;
  };

  return {
    getMembers,
    ...useContext(MembersContext)
  };
};

export default useMembers;
