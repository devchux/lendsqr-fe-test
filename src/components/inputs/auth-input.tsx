import React, { FC, useState } from "react";
import { AuthInputProps } from "../../types";

const AuthInput: FC<AuthInputProps> = ({
  wrapperClassName,
  hasError = false,
  type,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => setShowPassword(!showPassword);

  if (type === "password")
    return (
      <div
        className={`auth-input-wrapper auth-password-input ${
          hasError ? "has-error" : ""
        } ${wrapperClassName || ""}`}
      >
        <input
          type={showPassword ? "text" : "password"}
          {...rest}
          autoComplete="off"
        />
        <button
          type="button"
          className="toggle-button"
          onClick={togglePassword}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </button>
      </div>
    );
  return (
    <div
      className={`auth-input-wrapper ${hasError ? "has-error" : ""} ${
        wrapperClassName || ""
      }`}
    >
      <input type={type} {...rest} autoComplete="off" />
    </div>
  );
};

export default AuthInput;
