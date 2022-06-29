import { useField } from "formik";
import { observer } from "mobx-react";
import "./CustomInput.css";

function CustomInput(props) {
  const [field, meta] = useField(props);

  const aria = { "aria-invalid": !!meta.error };
  return (
    <>
      <input
        className="social-custominput-media"
        {...field}
        {...props}
        {...aria}
      />
      {meta.touched && meta.error ? (
        <div className="social-errordiv-media">{meta.error}</div>
      ) : null}
    </>
  );
}

export default observer(CustomInput);
