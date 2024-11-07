import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate} from "react-router-dom";
const Signout = () => {
    const navigate = useNavigate()
  const handlesignOut = async () => {
    try {
      await signOut(auth);
      navigate('/sign-in')
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };
  return (
    <div>
      <button onClick={handlesignOut}>Sign Out</button>
    </div>
  );
};

export default Signout;
