import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";

export default function ProtectedRoute() {
  const { user } = useUser();

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
