import { Link } from "react-router-dom";
import { AuthStatus } from "../components/auth";
import "../sass/header.scss";

export function Header(props: {
  auth: boolean;
  setAuth: (state: boolean) => void;
  searchItems: (state: string) => void;
  searchInput: string;
}) {
  return (
    <div className="header">
      <h1 className="title">Posts From the Past</h1>
      <div>
        <nav className="nav-bar">
          <label className="header__label left">
            <input
              className="header__input"
              value={props.searchInput}
              placeholder="Search in title..."
              onChange={(e) => props.searchItems(e.target.value.toLowerCase())}
            />
          </label>
          <Link className="nav-bar__link" to={"/favorite"}>Favorite</Link>
          <AuthStatus
            auth={props.auth}
            setAuth={props.setAuth}
            children={undefined}
          />
        </nav>
      </div>
    </div>
  );
}
