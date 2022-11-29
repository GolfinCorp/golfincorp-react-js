import AuthProvider from './AuthProvider.jsx';
import MembersProvider from './MembersProvider.jsx';
import GamesProvider from './GamesProvider.jsx';
const ContextsProvider = ({ children }) => {
  return (
    <AuthProvider>
      <GamesProvider>
        <MembersProvider>{children}</MembersProvider>
      </GamesProvider>
    </AuthProvider>
  );
};

export default ContextsProvider;
export { AuthContext } from './AuthProvider.jsx';
export { MembersContext } from './MembersProvider.jsx';
export { GamesContext } from './GamesProvider';
