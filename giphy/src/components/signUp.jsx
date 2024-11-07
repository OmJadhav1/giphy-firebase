import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebase";
import "./signUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigateToGifs, setNavigateToGifs] = useState(false);
  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setNavigateToGifs(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    <Navigate to="/Home" />;
  };

  if (navigateToGifs) {
    return <Navigate to="/Home" />;
  }

  return (
    <>
      {/* <div>
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
      <button onClick={signUp}>Sign UP</button>
    </div> */}

      <div className="sign-in-container">
        <div className="sign-in-form">
          <h2>Sign Up</h2>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button  className="sign-in-btn" onClick={signUp}>
              Sign Up
            </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
