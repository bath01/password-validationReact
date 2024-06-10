import React, { useState } from "react";
import "./App.css";
import openEye from "../src/open-eye.svg";
import closeEye from "../src/closed-eye.svg";
import PasswordValidator from "./utils/PasswordValidator";
import PasswordValidatorStatus from "../src/PasswordValidatorStatus"


function App() {
  const [password, setPassword] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const passwordValidator = new PasswordValidator(password)
  

  return (
    <>
      <h1>Validation de Mot de passe</h1>
      {/* {passwordIsVisible + ''} */}
      {/* {password.toUpperCase()} */}
      <input
        type={passwordIsVisible ? "text" : "password"}
        name=""
        id=""
        placeholder="Entrez votre mot de passe Svp!"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <span onClick={() => setPasswordIsVisible((prevState) => !prevState)}>
        <img
          src={passwordIsVisible ? closeEye : openEye}
          alt={passwordIsVisible ? "Caher" : "Afficher"}
          width="30"
        />
      </span>
      
      <PasswordValidatorStatus validator={passwordValidator}/>
    </>
  );
}

export default App;
