import { createContext, useState } from 'react';

export const MembersContext = createContext({});

const MembersProvider = ({ children }) => {
  const [members, setMembers] = useState(null);

  const data = {
    members,
    setMembers
  };

  return (
    <MembersContext.Provider value={data}>{children}</MembersContext.Provider>
  );
};

export default MembersProvider;
