import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/signUp";
import Auth from "./components/signIn";
import Home from "./components/Home";
// import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
