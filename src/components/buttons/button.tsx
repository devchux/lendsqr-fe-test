import React, { FC } from "react";
import { ButtonProps } from "../../types";

const Button: FC<ButtonProps> = ({
  children,
  className,
  block = false,
  ...rest
}) => {
  return (
    <button
      className={`custom-button ${block ? "is-block" : ""} ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
