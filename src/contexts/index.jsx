import AuthProvider from './AuthProvider.jsx';
import MembersProvider from './MembersProvider.jsx';
import GamesProvider from './GamesProvider.jsx';
import CalendarProvider from './CalendarContext.jsx';
const ContextsProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CalendarProvider>
        <GamesProvider>
          <MembersProvider>{children}</MembersProvider>
        </GamesProvider>
      </CalendarProvider>
    </AuthProvider>
  );
};

export default ContextsProvider;
export { AuthContext } from './AuthProvider.jsx';
export { MembersContext } from './MembersProvider.jsx';
export { GamesContext } from './GamesProvider';
export { CalendarContext } from './CalendarContext';
