import React from "react";
import "./../styles/RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Enter First Name" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Enter Last Name" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Enter Username" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Enter Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Enter Password" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="terms-group">
            <input type="checkbox" required /> I agree to all terms
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
      <div className="register-image">
        {/* Add an illustrative image */}
        <img src="your-register-image-url.png" alt="Register" />
      </div>
    </div>
  );
};

export default RegisterPage;
