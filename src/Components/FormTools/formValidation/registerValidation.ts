import * as Yup from "yup";
import { RegisterVales } from "../../../interfaces/registerValues";
import profileimg from "../profileimg.png";

export const initialValuesRegister: RegisterVales = {
  name: "",
  email: "",
  password: "",
  biography: "",
  confirmPassword: "",
  profileImg: profileimg,
};

export const validationSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
  biography: Yup.string()
    .required("Biography is required")
    .min(2, "Biography must be at least 2 characters"),
  profileImg: Yup.mixed<File>().required("Profile image is required"),
});
