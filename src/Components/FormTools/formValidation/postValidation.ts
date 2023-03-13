import * as Yup from "yup";
import { Post } from "../../../interfaces/post";

export const initialValues: Post = {
  img: "",
  // title: "",
  content: "",
};

export const validationSchema = Yup.object({
  img: Yup.string().required("Post image is required"),
  // title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});
