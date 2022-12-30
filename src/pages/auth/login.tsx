import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/buttons/button";
import AuthInput from "../../components/inputs/auth-input";
import { useForm } from "../../hooks/useForm";

type FormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { inputs, handleSubmit, handleChange, errors } = useForm<FormInputs>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: FormInputs) => {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = `email=${data.email}; expires=${d.toUTCString()}`;
    navigate('/')
  };
  return (
    <div className="login-page">
      <h3 className="page-title">Welcome!</h3>
      <p className="page-subtitle">Enter details to login.</p>
      <form
        className="form-wrapper"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <AuthInput
            type="email"
            placeholder="Email"
            hasError={errors.email}
            value={inputs.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <AuthInput
            type="password"
            placeholder="Password"
            hasError={errors.password}
            value={inputs.password}
            name="password"
            onChange={handleChange}
          />
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
