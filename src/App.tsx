import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/auth";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [auth, setAuth] = useState<boolean>(localStorage.getItem("auth") !== null);

  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", "1");
    } else localStorage.removeItem("auth");
  }, [auth]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth auth={auth}>
              <Home auth={auth} setAuth={setAuth} />
            </RequireAuth>
          }
        />
       
        <Route
          path="/login"
          element={<Login auth={auth} setAuth={setAuth} />}
        />
      </Routes>
      <ToastContainer
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </div>
  );
}

export default App;
