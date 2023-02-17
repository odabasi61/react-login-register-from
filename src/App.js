import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  // show current form (login or register)
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;

// onFormSwitch will be props to login and register
