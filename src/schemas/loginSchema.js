import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().required("Please input your username"),
  password: Yup.string().min(
    6,
    "password length must be more than 6 characters"
  ),
});
