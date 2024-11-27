import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-image">
          <img
            src="https://via.placeholder.com/400"
            alt="Login Illustration"
          />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="remember-group">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <button type="submit">Login</button>
          <div className="social-login">
            <button>Login with Facebook</button>
            <button>Login with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
