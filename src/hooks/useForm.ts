import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { UseFormTypes } from "../types";

export function useForm<Type>({ defaultValues }: UseFormTypes<Type>) {
  const [inputs, setInputs] = useState<Type>(defaultValues);
  const errorDefaultValues: any = {};
  Object.keys(defaultValues as object).forEach((item: string) => {
    errorDefaultValues[item] = false;
  });
  const [errors, setErrors] = useState(errorDefaultValues);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { name, value },
    } = e;

    setErrors({
      ...errors,
      [name]: false,
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
    Object.keys(inputs as object).forEach((item) => {
      if (!(inputs as any)[item]) {
        err[item] = true;
        hasError = true;
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
