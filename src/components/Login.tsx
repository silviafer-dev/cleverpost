import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../sass/login.scss";
import hand from "../assets/images/hand.svg";
import { toast } from "react-toastify";

export function Login(props: any) {
  let navigate = useNavigate();
  let location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const notify = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
    });
  };

  function handleSubmit(event: any) {
    event.preventDefault();

    if (username.toLowerCase() === "tim" && password === "123") {
      props.setAuth(true);
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } else {
      props.setAuth(false);
      notify("Wrong username or password!");
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <img src={hand} alt="hand" className="login-image" />
        <h1 className="login__title">Login to Cleverpost</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <label className="login__form--username">
            Username:
            <input
              className="login__form--input"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="login__form--password">
            <br />
            Password:
            <input
              className="login__form--input"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="login__form--button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
