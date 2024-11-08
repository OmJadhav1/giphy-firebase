import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
const Signout = () => {
  const navigate = useNavigate();
  const handlesignOut = async () => {
    try {
      await signOut(auth);
      navigate("/sign-in");
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };
  return (
    <>
      <button className="sign-out-btn" onClick={handlesignOut}>
        <svg className="sign-out-icon" />
        Sign Out
      </button>
    </>
  );
};

export default Signout;
