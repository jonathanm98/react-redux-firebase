import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const Register = () => {
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setdisplayName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({ displayName });
          console.log(userAuth);
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          <input
            type="text"
            placeholder="Pseudo"
            required
            onChange={(e) => setdisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            ref={registerEmail}
          />
          <input
            type="password"
            placeholder="Mod de passe"
            required
            ref={registerPassword}
          />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Register;
