import AuthProvider from './AuthProvider.jsx';
import MembersProvider from './MembersProvider.jsx';

const ContextsProvider = ({ children }) => {
  return (
    <AuthProvider>
      <MembersProvider>{children}</MembersProvider>
    </AuthProvider>
  );
};

export default ContextsProvider;
export { AuthContext } from './AuthProvider.jsx';
export { MembersContext } from './MembersProvider.jsx';
