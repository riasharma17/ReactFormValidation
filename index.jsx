import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("Please enter your first name"),

  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Please enter your last name"),

  userName: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .required("Please enter a username"),

  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please fill the password"),

  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),

  countryCode: Yup.string().required("Please select your country code"),

  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Please enter your phone number"),

  country: Yup.string().required("Please select your country"),

  city: Yup.string().required("Please select your city"),

  panNumber: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]$/, "Invalid PAN number")
    .required("Please enter your PAN number"),

  aadharNumber: Yup.string()
    .matches(/^\d{12}$/, "Aadhar number must be 12 digits")
    .required("Please enter your Aadhar number"),
});

