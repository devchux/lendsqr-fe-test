import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface AuthInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  wrapperClassName?: string;
}

export interface ChildrenProp {
  children: ReactNode;
}

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  block?: boolean;
}
