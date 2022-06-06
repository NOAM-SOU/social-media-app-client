import * as Yup from "yup";

const initialValuesRegister = {
  name: "",
  email: "",
  password: "",
  biography: "",
  confirmPassword: "",
};

const validationSchemaRegister = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  biography: Yup.string()
    .required("Biography is required")
    .min(2, "Biography must be at least 2 characters"),
  // profileImg: Yup.string().required("Profile image is required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

const validationSchemaLogin = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

export {
  initialValuesRegister,
  validationSchemaRegister,
  initialValuesLogin,
  validationSchemaLogin,
};
