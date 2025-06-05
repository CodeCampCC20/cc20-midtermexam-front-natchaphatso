import * as Yup from "yup";

export const schemaRegister = Yup.object({
  username: Yup.string()
    .matches(/^[a-zA-Z]{5,12}/, "username must be between 5-12 letters")
    .required("please set your username"),
  password: Yup.string()
    .min(
      6,
      ({ path, value }) =>
        `${path} password length must be more than 6 letters now you have only ${value.length} letters`
    )
    .required("please input your password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "password is not match"
  ),
});
