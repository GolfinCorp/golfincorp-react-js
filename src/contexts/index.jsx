import AuthProvider from './AuthProvider.jsx';

const ContextsProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextsProvider;
export { AuthContext } from './AuthProvider.jsx';
