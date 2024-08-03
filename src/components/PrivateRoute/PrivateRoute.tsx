import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUserData } from "../../hooks/useUserData";

export default function PrivateRoute() {
  const user  = useUserData();
  return user.user ? <Outlet /> : <Navigate to={appRoutes.MAIN} />;
}
