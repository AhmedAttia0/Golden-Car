import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

export default function ProtectedRoute() {
  const { user } = React.useContext(UserContext);

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
