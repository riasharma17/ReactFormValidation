import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import { signupSchema } from "./schemas/index";

const SignUp = () => {
  // const initialValues = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirm_password: "",
  // };
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

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <>
     <GlobalStyle />
           <Wrapper>
             <div className="container">
               <div className="modal">
                 <div className="modal-container">
                   <div className="modal-left">
                     <h1 className="modal-title">Welcome!</h1>
                    
                     <form onSubmit={handleSubmit}>
                       <div className="input-block">
                         <label htmlFor="name" className="input-label">
                           First Name
                         </label>
                   <input
       type="text"
       name="firstName"
       value={values.firstName}
       onChange={handleChange}
       onBlur={handleBlur}
       placeholder="First Name"
     />
     {errors.firstName && touched.firstName && <p className="form-error">{errors.firstName}</p>}
                       </div>
                       <div className="input-block">
                         <label htmlFor="name" className="input-label">
                           Last Name
                         </label>
                        <input
       type="text"
       name="lastName"
       value={values.lastName}
       onChange={handleChange}
       onBlur={handleBlur}
       placeholder="Last Name"
     />
     {errors.lastName && touched.lastName && <p className="form-error">{errors.lastName}</p>}
                       </div>
                       <div className="input-block">
                         <label htmlFor="name" className="input-label">
                           User Name
                         </label>
                         <input
                      type="text"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                       onBlur={handleBlur}
                       placeholder="User Name"
     />
     {errors.userName && touched.userName && <p className="form-error">{errors.userName}</p>}
                       </div>
                       <div className="input-block">
                         <label htmlFor="email" className="input-label">
                           Email
                         </label>
                         <input
                           type="email"
                           autoComplete="off"
                           name="email"
                           id="email"
                           placeholder="Email"
                           value={values.email}
                           onChange={handleChange}
                           onBlur={handleBlur}
                         />
                         {errors.email && touched.email ? (
                           <p className="form-error">{errors.email}</p>
                         ) : null}
                       </div>
                       <div className="input-block">
                         <label htmlFor="password" className="input-label">
                           Password
                         </label>
                         <input
                           type="password"
                           autoComplete="off"
                           name="password"
                           id="password"
                           placeholder="Password"
                           value={values.password}
                           onChange={handleChange}
                           onBlur={handleBlur}
                         />
                         {errors.password && touched.password ? (
                           <p className="form-error">{errors.password}</p>
                         ) : null}
                       </div>
                       <div className="input-block">
                         <label htmlFor="confirm_password" className="input-label">
                           Confirm Password
                         </label>
                         <input
                           type="password"
                           autoComplete="off"
                           name="confirm_password"
                           id="confirm_password"
                           placeholder="Confirm Password"
                           value={values.confirm_password}
                           onChange={handleChange}
                           onBlur={handleBlur}
                         />
                         {errors.confirm_password && touched.confirm_password ? (
                           <p className="form-error">{errors.confirm_password}</p>
                         ) : null}
                       </div>
                       <div className="input-block">
       <label htmlFor="countryCode" className="input-label">
         Country Code
       </label>
       <input
         type="text"
         autoComplete="off"
         name="countryCode"
         id="countryCode"
         placeholder="+91"
         value={values.countryCode}
         onChange={handleChange}
         onBlur={handleBlur}
       />
       {errors.countryCode && touched.countryCode ? (
         <p className="form-error">{errors.countryCode}</p>
       ) : null}
     </div>
     <div className="input-block">
       <label htmlFor="phoneNumber" className="input-label">
         Phone Number
       </label>
       <input
         type="text"
         autoComplete="off"
         name="phoneNumber"
         id="phoneNumber"
         placeholder="1234567890"
         value={values.phoneNumber}
         onChange={handleChange}
         onBlur={handleBlur}
       />
       {errors.phoneNumber && touched.phoneNumber ? (
         <p className="form-error">{errors.phoneNumber}</p>
       ) : null}
     </div>
     <div className="input-block">
       <label htmlFor="country" className="input-label">
         Country
       </label>
       <select
         name="country"
         id="country"
         value={values.country}
         onChange={handleChange}
         onBlur={handleBlur}
       >
         <option value="">Select Country</option>
         <option value="India">India</option>
         <option value="USA">USA</option>
        
       </select>
       {errors.country && touched.country ? (
         <p className="form-error">{errors.country}</p>
       ) : null}
     </div>
     <div className="input-block">
       <label htmlFor="city" className="input-label">
         City
       </label>
       <select
         name="city"
         id="city"
         value={values.city}
         onChange={handleChange}
         onBlur={handleBlur}
       >
         <option value="">Select City</option>
       
       </select>
       {errors.city && touched.city ? (
         <p className="form-error">{errors.city}</p>
       ) : null}
     </div>
     <div className="input-block">
       <label htmlFor="panNumber" className="input-label">
         PAN Number
       </label>
       <input
         type="text"
         autoComplete="off"
         name="panNumber"
         id="panNumber"
         placeholder="ABCDE1234F"
         value={values.panNumber}
         onChange={handleChange}
         onBlur={handleBlur}
       />
       {errors.panNumber && touched.panNumber ? (
         <p className="form-error">{errors.panNumber}</p>
       ) : null}
     </div>
     <div className="input-block">
       <label htmlFor="aadharNumber" className="input-label">
         Aadhar Number
       </label>
       <input
         type="text"
         autoComplete="off"
         name="aadharNumber"
         id="aadharNumber"
         placeholder="123412341234"
         value={values.aadharNumber}
         onChange={handleChange}
         onBlur={handleBlur}
       />
       {errors.aadharNumber && touched.aadharNumber ? (
         <p className="form-error">{errors.aadharNumber}</p>
       ) : null}
     </div>
     
                       <div className="modal-buttons">
                         <a href="#" className="">
                           Want to register using Gmail?
                         </a>
                         <button className="input-button" type="submit">
                           Registration
                         </button>
                       </div>
                     </form>
                     <p className="sign-up">
                       Already have an account? <a href="#">Sign In now</a>
                     </p>
                   </div>
               
                 </div>
               </div>
             </div>
           </Wrapper>
         </>
       );
     };

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default SignUp;
