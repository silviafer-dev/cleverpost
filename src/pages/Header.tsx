import { AuthStatus } from "../components/auth";
import { BiSearchAlt } from "react-icons/bi";

import "../sass/header.scss";

export function Header({ auth, setAuth, searchItems, searchInput }: any) {
  return (
    <div className="header">
      <h1 className="title">Posts From the Past</h1>
      <div>
        <label className="header__label left">
          {/* <BiSearchAlt className="search"/> */}
          <input
          className="header__input"
            value={searchInput}
            placeholder="Search in title..."
            onChange={(e) => searchItems(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      <AuthStatus auth={auth} setAuth={setAuth} />
    </div>
  );
}
