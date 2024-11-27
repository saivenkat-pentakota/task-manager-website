import React from "react";
import "./../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign In</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Enter Username" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Enter Password" required />
          </div>
          <div className="remember-group">
            <input type="checkbox" /> Remember Me
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Or Login with</p>
        <div className="social-login">
          <button>Facebook</button>
          <button>Google</button>
          <button>GitHub</button>
        </div>
        <p>
          Don't have an account? <a href="/register">Create One</a>
        </p>
      </div>
      <div className="login-image">
        {/* Add an illustrative image */}
        <img src="your-login-image-url.png" alt="Login" />
      </div>
    </div>
  );
};

export default LoginPage;
