import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/button";
import AuthInput from "../../components/inputs/auth-input";

const Login = () => {
  return (
    <div className="login-page">
      <h3 className="page-title">Welcome!</h3>
      <p className="page-subtitle">Enter details to login.</p>
      <form className="form-wrapper" autoComplete="off">
        <div className="form-group">
          <AuthInput type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <AuthInput type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <Link to="/" className="forgot-password-text">
            Forgot PASSWORD?
          </Link>
        </div>
        <div className="form-group">
          <Button block type="submit">
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
