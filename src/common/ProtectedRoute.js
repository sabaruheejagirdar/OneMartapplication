import { Navigate } from "react-router-dom";
import { userRole } from "../constants/constants";
import Unathorised from "../pages/Unathorised/Unathorised";

const ProtectedRoute = ({ children, role }) => {
  const cachedRole = localStorage.getItem("user_role");
  console.log(role, cachedRole);
  if (cachedRole && cachedRole === role) {
    return children;
  } else if (cachedRole) {
    return <Unathorised />;
  }

  return <Navigate to="/login" replace />;
};
export default ProtectedRoute;
