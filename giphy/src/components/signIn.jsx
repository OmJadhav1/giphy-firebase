import React from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        navigate("/Home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setPassword("");
      });
  };
  const goToSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div>
      <input
        placeholder="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign IN</button>
      <br />

      <p>Don't have an account</p>
      <button onClick={goToSignUp}>create Account</button>
    </div>
  );
};

export default Auth;
