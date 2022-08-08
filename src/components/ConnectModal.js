import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const ConnectModal = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button
          style={{ background: login ? "rgb(83,83,83)" : "rgb(28,28,28)" }}
          onClick={() => setLogin(false)}
        >
          S'inscrire
        </button>
        <button
          style={{ background: login ? "rgb(28, 28, 28)" : "rgb(83, 83, 83)" }}
          onClick={() => setLogin(true)}
        >
          Se connecter
        </button>
      </div>
      {login ? <Login /> : <Register />}
    </div>
  );
};

export default ConnectModal;
