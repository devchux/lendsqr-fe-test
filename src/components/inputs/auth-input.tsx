import React, { FC, useState } from "react";
import { AuthInputProps } from "../../types";

const AuthInput: FC<AuthInputProps> = ({ wrapperClassName, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => setShowPassword(!showPassword);

  if (type === "password")
    return (
      <div
        className={`auth-input-wrapper auth-password-input ${
          wrapperClassName || ""
        }`}
      >
        <input type={showPassword ? "text" : "password"} {...rest} />
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
    <div className={`auth-input-wrapper ${wrapperClassName || ""}`}>
      <input type={type} {...rest} />
    </div>
  );
};

export default AuthInput;
