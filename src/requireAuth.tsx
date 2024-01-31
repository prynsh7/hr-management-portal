import { Navigate } from "react-router";
import { useAuth } from "./hooks";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { authed } = useAuth();
  if (authed) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default RequireAuth;
