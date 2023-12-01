import AuthContext from "../store/auth-context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const authContext = useContext(AuthContext);

  return authContext.token ? element : <Navigate to="/auth" />;
};
export default ProtectedRoute;
