import { observer } from "mobx-react";
import "./CustomInput.css";

import { ErrorMessage, Field } from "formik";
import { CustomInputProps } from "../../../types/customInput";
import React from "react";

export function CustomInput({
  name,
  type,
  placeholder,
  id,
  accept,
  onChange,
  className,
}: CustomInputProps) {
  return (
    <>
      <Field
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
        accept={accept}
        id={id}
        onChange={onChange}
      />

      <ErrorMessage name={name}>{(msg) => <div>{msg}</div>}</ErrorMessage>
    </>
  );
}

// function CustomInput(props: FieldProps) {
//   const [field, meta] = useField(props);

//   const aria = { "aria-invalid": !!meta.error };
//   return (
//     <>
//       <input
//         className="social-custominput-media"
//         {...field}
//         {...props}
//         {...aria}
//       />
//       {meta.touched && meta.error ? (
//         <div className="social-errordiv-media">{meta.error}</div>
//       ) : null}
//     </>
//   );
// }

export default observer(CustomInput);
