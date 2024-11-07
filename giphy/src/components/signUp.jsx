import React ,{useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebase";

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
      <Navigate to="/Home" />
  };

  if (navigateToGifs) {
    return <Navigate to="/Home" />;
  }

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
      <button onClick={signUp}>Sign UP</button>
    </div>
  );
};

export default SignUp;
