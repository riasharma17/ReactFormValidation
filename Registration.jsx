// import React from "react";
// import styled from "styled-components";
// import { GlobalStyle } from "./Styles/globalStyles";
// import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";


// const initialValues = {
//   firstName: "",
//   lastName: "",
//   userName: "",
//   email: "",
//   password: "",
//   confirm_password: "",
//   countryCode: "",
//   phoneNumber: "",
//   country: "",
//   city: "",
//   panNumber: "",
//   aadharNumber: "",
// };


// const Registration = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: signUpSchema,
//       onSubmit: (values, action) => {
//         console.log(
//           "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
//           values
//         );
//         action.resetForm();
//       },
//     });
//   console.log(
//     "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
//     errors
//   );

//   return (
//     <>
//       <GlobalStyle />
//       <Wrapper>
//         <div className="container">
//           <div className="modal">
//             <div className="modal-container">
//               <div className="modal-left">
//                 <h1 className="modal-title">Welcome!</h1>
               
//                 <form onSubmit={handleSubmit}>
//                   <div className="input-block">
//                     <label htmlFor="name" className="input-label">
//                       First Name
//                     </label>
//               <input
//   type="text"
//   name="firstName"
//   value={values.firstName}
//   onChange={handleChange}
//   onBlur={handleBlur}
//   placeholder="First Name"
// />
// {errors.firstName && touched.firstName && <p className="form-error">{errors.firstName}</p>}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="name" className="input-label">
//                       Last Name
//                     </label>
//                    <input
//   type="text"
//   name="lastName"
//   value={values.lastName}
//   onChange={handleChange}
//   onBlur={handleBlur}
//   placeholder="Last Name"
// />
// {errors.lastName && touched.lastName && <p className="form-error">{errors.lastName}</p>}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="name" className="input-label">
//                       User Name
//                     </label>
//                     <input
//                  type="text"
//                  name="userName"
//                  value={values.userName}
//                  onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="User Name"
// />
// {errors.userName && touched.userName && <p className="form-error">{errors.userName}</p>}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="email" className="input-label">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       autoComplete="off"
//                       name="email"
//                       id="email"
//                       placeholder="Email"
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.email && touched.email ? (
//                       <p className="form-error">{errors.email}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="password" className="input-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="password"
//                       id="password"
//                       placeholder="Password"
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.password && touched.password ? (
//                       <p className="form-error">{errors.password}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="confirm_password" className="input-label">
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="confirm_password"
//                       id="confirm_password"
//                       placeholder="Confirm Password"
//                       value={values.confirm_password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.confirm_password && touched.confirm_password ? (
//                       <p className="form-error">{errors.confirm_password}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//   <label htmlFor="countryCode" className="input-label">
//     Country Code
//   </label>
//   <input
//     type="text"
//     autoComplete="off"
//     name="countryCode"
//     id="countryCode"
//     placeholder="+91"
//     value={values.countryCode}
//     onChange={handleChange}
//     onBlur={handleBlur}
//   />
//   {errors.countryCode && touched.countryCode ? (
//     <p className="form-error">{errors.countryCode}</p>
//   ) : null}
// </div>
// <div className="input-block">
//   <label htmlFor="phoneNumber" className="input-label">
//     Phone Number
//   </label>
//   <input
//     type="text"
//     autoComplete="off"
//     name="phoneNumber"
//     id="phoneNumber"
//     placeholder="1234567890"
//     value={values.phoneNumber}
//     onChange={handleChange}
//     onBlur={handleBlur}
//   />
//   {errors.phoneNumber && touched.phoneNumber ? (
//     <p className="form-error">{errors.phoneNumber}</p>
//   ) : null}
// </div>
// <div className="input-block">
//   <label htmlFor="country" className="input-label">
//     Country
//   </label>
//   <select
//     name="country"
//     id="country"
//     value={values.country}
//     onChange={handleChange}
//     onBlur={handleBlur}
//   >
//     <option value="">Select Country</option>
//     <option value="India">India</option>
//     <option value="USA">USA</option>
   
//   </select>
//   {errors.country && touched.country ? (
//     <p className="form-error">{errors.country}</p>
//   ) : null}
// </div>
// <div className="input-block">
//   <label htmlFor="city" className="input-label">
//     City
//   </label>
//   <select
//     name="city"
//     id="city"
//     value={values.city}
//     onChange={handleChange}
//     onBlur={handleBlur}
//   >
//     <option value="">Select City</option>
  
//   </select>
//   {errors.city && touched.city ? (
//     <p className="form-error">{errors.city}</p>
//   ) : null}
// </div>
// <div className="input-block">
//   <label htmlFor="panNumber" className="input-label">
//     PAN Number
//   </label>
//   <input
//     type="text"
//     autoComplete="off"
//     name="panNumber"
//     id="panNumber"
//     placeholder="ABCDE1234F"
//     value={values.panNumber}
//     onChange={handleChange}
//     onBlur={handleBlur}
//   />
//   {errors.panNumber && touched.panNumber ? (
//     <p className="form-error">{errors.panNumber}</p>
//   ) : null}
// </div>
// <div className="input-block">
//   <label htmlFor="aadharNumber" className="input-label">
//     Aadhar Number
//   </label>
//   <input
//     type="text"
//     autoComplete="off"
//     name="aadharNumber"
//     id="aadharNumber"
//     placeholder="123412341234"
//     value={values.aadharNumber}
//     onChange={handleChange}
//     onBlur={handleBlur}
//   />
//   {errors.aadharNumber && touched.aadharNumber ? (
//     <p className="form-error">{errors.aadharNumber}</p>
//   ) : null}
// </div>

//                   <div className="modal-buttons">
//                     <a href="#" className="">
//                       Want to register using Gmail?
//                     </a>
//                     <button className="input-button" type="submit">
//                       Registration
//                     </button>
//                   </div>
//                 </form>
//                 <p className="sign-up">
//                   Already have an account? <a href="#">Sign In now</a>
//                 </p>
//               </div>
          
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.section`
//   .container {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #efedee;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .modal {
//     width: 100%;
//     /* height: 60px; */
//     background: rgba(51, 51, 51, 0.5);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     transition: 0.4s;
//   }
//   .modal-container {
//     display: flex;
//     max-width: 60vw;
//     width: 100%;
//     border-radius: 10px;
//     overflow: hidden;
//     position: absolute;

//     transition-duration: 0.3s;
//     background: #fff;
//   }
//   .modal-title {
//     margin: 0;
//     font-weight: 400;
//     color: #55311c;
//   }
//   .form-error {
//     font-size: 1.4rem;
//     color: #b22b27;
//   }
//   .modal-desc {
//     margin: 6px 0 30px 0;
//   }
//   .modal-left {
//     padding: 60px 30px 20px;
//     background: #fff;
//     flex: 1.5;
//     transition-duration: 0.5s;
//     opacity: 1;
//   }

//   .modal-right {
//     flex: 2;
//     font-size: 0;
//     transition: 0.3s;
//     overflow: hidden;
//   }
//   .modal-right img {
//     width: 100%;
//     height: 100%;
//     transform: scale(1);
//     -o-object-fit: cover;
//     object-fit: cover;
//     transition-duration: 1.2s;
//   }

//   .modal.is-open .modal-left {
//     transform: translateY(0);
//     opacity: 1;
//     transition-delay: 0.1s;
//   }
//   .modal-buttons {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   .modal-buttons a {
//     color: rgba(51, 51, 51, 0.6);
//     font-size: 14px;
//   }

//   .sign-up {
//     margin: 60px 0 0;
//     font-size: 14px;
//     text-align: center;
//   }
//   .sign-up a {
//     color: #8c7569;
//   }

//   .input-button {
//     padding: 1.2rem 3.2rem;
//     outline: none;
//     text-transform: uppercase;
//     border: 0;
//     color: #fff;
//     border-radius: 4px;
//     background: #8c7569;
//     transition: 0.3s;
//     cursor: pointer;
//     font-family: "Nunito", sans-serif;
//   }
//   .input-button:hover {
//     background: #55311c;
//   }

//   .input-label {
//     font-size: 11px;
//     text-transform: uppercase;
//     font-weight: 600;
//     letter-spacing: 0.7px;
//     color: #8c7569;
//     transition: 0.3s;
//   }

//   .input-block {
//     display: flex;
//     flex-direction: column;
//     padding: 10px 10px 8px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     margin-bottom: 20px;
//     transition: 0.3s;
//   }
//   .input-block input {
//     outline: 0;
//     border: 0;
//     padding: 4px 0 0;
//     font-size: 14px;
//   }

//   .input-block input::-moz-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input:-ms-input-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input::placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block:focus-within {
//     border-color: #8c7569;
//   }
//   .input-block:focus-within .input-label {
//     color: rgba(140, 117, 105, 0.8);
//   }

//   @media (max-width: 750px) {
//     .modal-container {
//       max-width: 90vw;
//     }

//     .modal-right {
//       display: none;
//     }
//   }
// `;

// export default Registration;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // For routing

const countryCityMap = {
  India: ["Delhi", "Mumbai", "Bengaluru", "Chennai", "Kolkata"],
  USA: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
};

// Validation schema with Yup
const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  userName: Yup.string().required("User Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  countryCode: Yup.string()
    .matches(/^\+\d+$/, "Country code should start with + and numbers only")
    .required("Country code is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  panNumber: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]$/, "Invalid PAN Number format")
    .required("PAN Number is required"),
  aadharNumber: Yup.string()
    .matches(/^\d{12}$/, "Aadhar Number must be exactly 12 digits")
    .required("Aadhar Number is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirm_password: "",
  countryCode: "",
  phoneNumber: "",
  country: "",
  city: "",
  panNumber: "",
  aadharNumber: "",
};

const Registration = () => {
  const navigate = useNavigate(); // for navigation on submit
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [cities, setCities] = useState([]);

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      // On successful submit, navigate to user-details page and pass data (simulate)
      console.log("Form Submitted:", values);
      actions.resetForm();
      navigate("/user-details", { state: { userData: values } });
    },
  });

  // Update cities list when country changes
  useEffect(() => {
    if (formik.values.country) {
      setCities(countryCityMap[formik.values.country] || []);
      formik.setFieldValue("city", ""); // reset city when country changes
    } else {
      setCities([]);
      formik.setFieldValue("city", "");
    }
  }, [formik.values.country]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>

                <form onSubmit={formik.handleSubmit} noValidate>
                  {/* First Name */}
                  <div className="input-block">
                    <label htmlFor="firstName" className="input-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="First Name"
                    />
                    {formik.errors.firstName && formik.touched.firstName && (
                      <p className="form-error">{formik.errors.firstName}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="input-block">
                    <label htmlFor="lastName" className="input-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Last Name"
                    />
                    {formik.errors.lastName && formik.touched.lastName && (
                      <p className="form-error">{formik.errors.lastName}</p>
                    )}
                  </div>

                  {/* User Name */}
                  <div className="input-block">
                    <label htmlFor="userName" className="input-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="User Name"
                    />
                    {formik.errors.userName && formik.touched.userName && (
                      <p className="form-error">{formik.errors.userName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Email"
                      autoComplete="off"
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="form-error">{formik.errors.email}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="input-block" style={{ position: "relative" }}>
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Password"
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword((prev) => !prev)}
                      tabIndex={-1}
                      aria-label="Toggle Password Visibility"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                    {formik.errors.password && formik.touched.password && (
                      <p className="form-error">{formik.errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="input-block" style={{ position: "relative" }}>
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirm_password"
                      id="confirm_password"
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Confirm Password"
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      tabIndex={-1}
                      aria-label="Toggle Confirm Password Visibility"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                    {formik.errors.confirm_password &&
                      formik.touched.confirm_password && (
                        <p className="form-error">
                          {formik.errors.confirm_password}
                        </p>
                      )}
                  </div>

                  {/* Country Code */}
                  <div className="input-block">
                    <label htmlFor="countryCode" className="input-label">
                      Country Code
                    </label>
                    <input
                      type="text"
                      name="countryCode"
                      id="countryCode"
                      placeholder="+91"
                      value={formik.values.countryCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.countryCode && formik.touched.countryCode && (
                      <p className="form-error">{formik.errors.countryCode}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="input-block">
                    <label htmlFor="phoneNumber" className="input-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="1234567890"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                      <p className="form-error">{formik.errors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div className="input-block">
                    <label htmlFor="country" className="input-label">
                      Country
                    </label>
                    <select
                      name="country"
                      id="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Select Country</option>
                      {Object.keys(countryCityMap).map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {formik.errors.country && formik.touched.country && (
                      <p className="form-error">{formik.errors.country}</p>
                    )}
                  </div>

                  {/* City */}
                  <div className="input-block">
                    <label htmlFor="city" className="input-label">
                      City
                    </label>
                    <select
                      name="city"
                      id="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={!formik.values.country}
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {formik.errors.city && formik.touched.city && (
                      <p className="form-error">{formik.errors.city}</p>
                    )}
                  </div>

                  {/* PAN Number */}
                  <div className="input-block">
                    <label htmlFor="panNumber" className="input-label">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      name="panNumber"
                      id="panNumber"
                      placeholder="ABCDE1234F"
                      value={formik.values.panNumber.toUpperCase()}
                      onChange={(e) =>
                        formik.setFieldValue("panNumber", e.target.value.toUpperCase())
                      }
                      onBlur={formik.handleBlur}
                      maxLength={10}
                    />
                    {formik.errors.panNumber && formik.touched.panNumber && (
                      <p className="form-error">{formik.errors.panNumber}</p>
                    )}
                  </div>

                  {/* Aadhar Number */}
                  <div className="input-block">
                    <label htmlFor="aadharNumber" className="input-label">
                      Aadhar Number
                    </label>
                    <input
                      type="text"
                      name="aadharNumber"
                      id="aadharNumber"
                      placeholder="123412341234"
                      value={formik.values.aadharNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      maxLength={12}
                    />
                    {formik.errors.aadharNumber && formik.touched.aadharNumber && (
                      <p className="form-error">{formik.errors.aadharNumber}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Register
                  </button>
                </form>
              </div>

              {/* Right side with image or info */}
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1470&q=80"
                  alt="registration"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .container {
    max-width: 1024px;
    margin: 3rem auto;
    padding: 0 1rem;
  }

  .modal {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 1rem;
    overflow: hidden;
    max-width: 800px;
    margin: 2rem auto;
  }

  .modal-container {
    display: flex;
  }

  .modal-left,
  .modal-right {
    flex: 1;
  }

  .modal-left {
    padding: 2rem;
    background: #fefefe;
  }

  .modal-title {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .input-block {
    margin-bottom: 1rem;
  }

  .input-label {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }

  input,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    box-sizing: border-box;
  }

  input:focus,
  select:focus {
    outline: none;
    border-color: #007bff;
  }

  .form-error {
    color: #d93025;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  .btn {
    padding: 0.75rem 1rem;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 0.25rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
  }

  .btn:disabled {
    background-color: #8ab6ff;
    cursor: not-allowed;
  }

  .btn:not(:disabled):hover {
    background-color: #0056b3;
  }

  .modal-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .toggle-password {
    position: absolute;
    top: 35px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #007bff;
    font-weight: 600;
    font-size: 0.875rem;
  }
`;

export default Registration;
