import React, { useState } from "react";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "./firebase";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = isSignUp
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCredential.user);
    } catch (error) {
      if (isSignUp && error.code === "auth/email-already-in-use") {
        alert("📩 You're already registered. Please login.");
        setIsSignUp(false);
      } else {
        alert(`Firebase: ${error.message}`);
      }
    }
  };

  return (
    <div className="login">
      <h2>{isSignUp ? "Create Account ✨" : "Welcome Back 👋"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="📧 Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="🔒 Password" required />
        <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
      </form>
      <p>
        {isSignUp ? "Already have an account?" : "New here?"}
        <button className="switch-btn" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? " Login" : " Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default Login;
