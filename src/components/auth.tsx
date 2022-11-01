import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { IAuthState } from '../interfaces';

export function AuthStatus(props: IAuthState) {
  let navigate = useNavigate();

  if (!props.auth) {
    return <p>You are not logged in.</p>;
  }

  return (
    <button
      className="logout"
      onClick={() => {
        props.setAuth(false);

        navigate("/");
      }}
    >
      Sign out
    </button>
  );
}
export function RequireAuth(props: {
  children: React.ReactElement<any, any>;
  auth: boolean;
}) {
  let location = useLocation();

  if (!props.auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
