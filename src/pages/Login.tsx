import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../sass/login.scss";
import feather from "../assets/images/feather.svg";
import { toast } from "react-toastify";

export function Login(props: {
  auth: boolean;
  setAuth: (state: boolean) => void;
}) {
  let navigate = useNavigate();
  let location = useLocation();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const notify = (message: string) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
    });
  };

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.toLowerCase() === "tim" && password === "123") {
      props.setAuth(true);
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } else {
      props.setAuth(false);
      notify("Username or password is incorrect! Please, try again!");
    }
  }

  return (
    <div className="login">
      <div className="container-box">
        <img src={feather} alt="hand" className="login-image" />
        <h1 className="login__title">Welcome to Cleverpost</h1>
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login__form">
          <label className="login__form--username">
            Username:
            <input
              className="login__form--input"
              name="username"
              type="text"
              value={username}
              placeholder="Tim"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
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
              placeholder="123"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
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
