import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Welcome to CloudProject</h1>
      <nav>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
};

export default App;
