import React, { useState } from "react";

// from app.js onFormSwitch is props to login and register. so we can use it below in button
export const Login = (props) => {
  // to capture the email and password values, we use useState hook
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="********"
          id="password"
          name="password"
        />
        <button className="login" type="submit">
          Log In
        </button>
      </form>
      <button className="submit" onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};
