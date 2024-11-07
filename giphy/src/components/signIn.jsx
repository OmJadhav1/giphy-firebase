import React from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./signIn.css";
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
    <>
      {/* <div>
        <input
          placeholder="email"
          type="email"
          onChanesxge={(e) => setEmail(e.target.value)}
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
      </div> */}

      <div className="sign-in-container">
        <div className="sign-in-form">
          <h2>Sign In</h2>
            <div className="input-group">
              <label >Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label >Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="sign-in-btn"  onClick={signIn}>
              Sign In
            </button>
          <p className="create-account">
            Don't have an account? <a onClick={goToSignUp}>Create one</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
