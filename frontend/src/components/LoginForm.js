import React, { useState } from "react";
import "./../styles/App.css";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      {props.error ? <div className="error">{props.error}</div> : null}
      <button onClick={() => props.signupHandler(username, password)}>Sign Up</button>
      <button onClick={() => props.loginHandler(username, password)}>Log In</button>
    </div>
  );
}