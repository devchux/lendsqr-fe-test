import React, { FC } from "react";
import { LogoIcon } from "../assets/svgs";
import { ChildrenProp } from "../types";
import bannerImage from "../assets/images/auth-banner.png";

const AuthLayout: FC<ChildrenProp> = ({ children }) => {
  return (
    <div className="auth-layout-wrapper">
      <div className="auth-layout-image-wrapper">
        <div className="auth-layout-image-inner-wrapper">
          <div>
            <LogoIcon />
          </div>
          <div>
            <img src={bannerImage} alt="banner" />
          </div>
        </div>
      </div>
      <div className="auth-layout-form-wrapper">{children}</div>
    </div>
  );
};

export default AuthLayout;
