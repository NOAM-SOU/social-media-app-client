import formik from "formik";
import React from "react";

export type CustomInputProps = {
  type?: string;
  name: string;
  placeholder?: string;
  accept?: string;
  className?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  //   errors: formik.FormikErrors<formik.FormikValues>;
  //   touched: formik.FormikTouched<formik.FormikValues>;
};
