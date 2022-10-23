import { AuthStatus } from "../components/auth";
import "../sass/header.scss";

export function Header({ auth, setAuth }: any) {
  return (
    <div className="header">
      <AuthStatus auth={auth} setAuth={setAuth}/>
      <h1 className="title">Posts From the Past</h1>
    </div>
  );
}
