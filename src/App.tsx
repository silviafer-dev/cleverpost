import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/auth";
import { Login } from "./components/Login";
import { Home } from "./pages/Home";
import { ModalCard } from './components/ModalCard';

function App() {
  const [auth, setAuth] = useState(
    JSON.parse( localStorage.getItem( "auth") || '{}' )
  );

  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", JSON.stringify("1"));
    } else localStorage.removeItem("auth");
  }, [auth]);

  return (
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
        path="/:id"
        element={
          <RequireAuth auth={auth}>
            <ModalCard  />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login setAuth={setAuth} />} />
    </Routes>
  );
}

export default App;
