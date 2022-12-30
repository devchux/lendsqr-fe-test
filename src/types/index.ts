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
  hasError?: boolean;
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

export type UseFormTypes<Type> = {
  defaultValues: Type;
  validation?: Record<
    string,
    Record<string, (value: any) => string | boolean>
  >;
};
