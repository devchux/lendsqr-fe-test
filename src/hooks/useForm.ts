import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { UseFormTypes } from "../types";

export function useForm<Type>({
  defaultValues,
  validation,
}: UseFormTypes<Type>) {
  const [inputs, setInputs] = useState<Type>(defaultValues);
  const errorDefaultValues: any = {};
  Object.keys(defaultValues as object).forEach((item: string) => {
    errorDefaultValues[item] = "";
  });
  const [errors, setErrors] =
    useState<{ [x in keyof Type]: boolean }>(errorDefaultValues);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { name, value },
    } = e;

    setErrors({
      ...errors,
      [name]: "",
    });

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const setFieldValue = (name: string, value: string) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (
    onSubmit: (data: any) => void
  ): FormEventHandler<HTMLFormElement> => {
    const err: any = {};
    let hasError: boolean = false;
    Object.keys(inputs as object).forEach((item: string) => {
      if (validation) {
        Object.values(validation[item] || {}).every((func) => {
          const errValue = func((inputs as any)[item]);
          if (typeof errValue === "string") {
            err[item] = errValue;
            hasError = true;
            return false;
          }

          return true;
        });
      }
    });

    if (hasError)
      return (e) => {
        e.preventDefault();
        setErrors({
          ...errors,
          ...err,
        });
      };

    return (e) => {
      e.preventDefault();
      onSubmit(inputs);
    };
  };

  return {
    inputs,
    handleChange,
    setFieldValue,
    errors,
    handleSubmit,
  };
}
