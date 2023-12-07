import * as yup from "yup";

const passwordRegex =
 
/^(?=.*[a-zA-Z])(?=.*\d).+$/;

let existUser = yup.object().shape({
 
  email: yup
    .string().required()
    .email()
    .required("Please enter a valid email address"),
  password: yup
    .string()
    .matches(passwordRegex, {
      message: "Password must contain atleast one numeric character",
    })
    .required("Password must contain atleast one numeric character"),
 
});

let newUser = yup.object().shape({
  name: yup.string().uppercase().required("Please enter a valid name"),
  email: yup
    .string().required()
    .email()
    .required("Please enter a valid email address"),
  password: yup
    .string()
    .matches(passwordRegex, {
      message: "Password must contain atleast one numeric character",
    })
    .required("Password must contain atleast one numeric character"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], )
    .required("Password must match"),
});

export  {existUser,newUser};
