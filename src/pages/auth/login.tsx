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
    validation: {
      password: {
        hasMoreThan6Chars: (val) =>
          val.length >= 6 || 'Please enter 6 or more characters',
        hasCapsChars: (val) =>
          /[A-Z]/.test(val) ||
          'Please enter at least one capital letter',
        hasLowercaseChars: (val) =>
          /[a-z]/.test(val) ||
          'Please enter at least one lowercase letter',
        hasNumChars: (val) =>
          /[0-9]/.test(val) || 'Please enter at least one number',
        hasSpecialChars: (val) =>
          /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(val) ||
          'Please enter at least one special character',
      },
    },
  });

  const onSubmit = (data: FormInputs) => {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = `email=${data.email}; expires=${d.toUTCString()}`;
    navigate("/");
  };
  return (
    <div className="login-page">
      <div className="page-content-wrapper">
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
              hasError={!!errors.email}
              value={inputs.email}
              name="email"
              onChange={handleChange}
            />
            {!!errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <AuthInput
              type="password"
              placeholder="Password"
              hasError={!!errors.password}
              value={inputs.password}
              name="password"
              onChange={handleChange}
            />
            {!!errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
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
    </div>
  );
};

export default Login;
