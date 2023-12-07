import { useFormik } from "formik";
import { existUser } from "../Utils/validate";
import { NavLink, useNavigate } from "react-router-dom";
import { app } from "../Utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [errorMessage,setErroMessage]=useState();
  const navigate =useNavigate();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: existUser,
    onSubmit: (values) => {
      console.log(values);
      console.log(values.email);
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browser")
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErroMessage(errorMessage)
        });
    },
  });

  console.log(errors);

  return (
    <div className="">
      <div>
        <div className="bg_shadow">
          <img
            src="./assests/bgimages/netflixbg.jpg"
            className="bg_image "
            alt=""
          />
          <div className="container">
            <div className="d-flex justify-center align-items-center min-h-screen ">
              <div className="black_div ">
                <form action="" onSubmit={handleSubmit}>
                  <div className="form_div">
                    <div className="mt-3 mb-3">
                      <h2 className="text-white ">Sign In</h2>
                    </div>

                    <div className="row gap-3">
                      <div className="col-12 mt-3">
                        <input
                          name="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          placeholder="Enter Email"
                          className="w-100 netflix_input"
                        />
                      </div>
                      {errors.email && touched.email && (
                        <p className="text-red-500 m-0">{errors.email}</p>
                      )}
                      <div className="col-12 mt-3">
                        <input
                          name="password"
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="password"
                          placeholder="Enter password"
                          className="w-100 netflix_input"
                        />
                      </div>
                      {errors.password && touched.password && (
                        <p className="text-red-500 m-0">{errors.password}</p>
                      )}
                      {
                        errorMessage && <p className="text-red-500 m-0">This email has been not registered</p>
                      }
                      <div className="col-12 mt-3">
                        <button type="submit" className="netflix_btn w_135px">
                          Sign up
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </form>
                <p className="text-gray-500">
                  New to Netflix ?{" "}
                  <NavLink to="./Signup" className="text-white">
                    Sign up now.
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
