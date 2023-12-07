import React from "react";
import { NavLink } from "react-router-dom";

import { useFormik } from "formik";
import { newUser } from "../Utils/validate";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    onSubmit,
    handleChange,
    handleReset,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: newUser,
    onSubmit: (values) => {
      console.log(values);
      handleReset();
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, values.email, values.password)
     
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        console.log(user)
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  });

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
                      <h2 className="text-white ">Sign Up</h2>
                    </div>

                    <div className="row gap-3">
                      <div className="col-12 mt-3">
                        <input
                          name="name"
                          value={values.name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="text"
                          placeholder="Enter Name"
                          className="w-100 netflix_input"
                        />
                      </div>
                      {errors.name && touched.name && (
                        <p className="text-red-500 m-0">{errors.name}</p>
                      )}
                      <div className="col-12 mt-3">
                        <input
                          name="email"
                          type="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
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
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter password"
                          className="w-100 netflix_input"
                        />
                      </div>
                      {errors.password && touched.password && (
                        <p className="text-red-500 m-0">{errors.password}</p>
                      )}
                      <div className="col-12 mt-3">
                        <input
                          name="confirmPassword"
                          value={values.confirmPassword}
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Confirm password"
                          className="w-100 netflix_input"
                        />
                      </div>
                      {errors.confirmPassword && touched.confirmPassword && (
                        <p className="text-red-500 m-0">
                          {errors.confirmPassword}
                        </p>
                      )}
                      <div className="col-12 mt-3">
                        <button type="submit" className="netflix_btn w_135px">
                          Sign In
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </form>
                <p className="text-gray-500">
                  Already have a account ?{" "}
                  <NavLink to="/" className="text-white ">
                    Sign In now.
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

export default Signup;
