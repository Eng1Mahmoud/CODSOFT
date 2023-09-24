import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import signupImage from "../assets/signup.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const validationSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Age must be a positive number"),
  password: yup.string().required("Password is required"),
  twitter: yup
    .string()
    .required("Twitter account is required")
    .matches(/^https?:\/\/twitter\.com\/.*/, "Invalid Twitter URL"),
  linkedin: yup
    .string()
    .required("LinkedIn account is required")
    .matches(/^https?:\/\/(www\.)?linkedin\.com\/.*/, "Invalid LinkedIn URL"),
});

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  age: "",
  twitter: "",
  linkedin: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const [exist, setExist] = useState({ exist: false, message: "" });
  const [loading, setLoading] = useState(false);
  const closePopup = () => {
    setExist({ exist: false, message: "" });
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        values
      );

      sessionStorage.setItem(
        "verification_code",
        response.data.verification_code
      );
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      console.log("User signed up successfully:", response.data);
      if (response.data.exist) {
        setTimeout(() => {
          setLoading(false);
          setExist({ exist: true, message: response.data.message });
          resetForm();
        }, 1000);
      } else {
        setTimeout(() => {
          setLoading(false);
          navigate("/verifycode");
        }, 1000);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  return (
    <section className="signup">
      {" "}
      {exist.exist ? (
        <div className="popup">
          <p> {exist.message}</p>
          <AiOutlineClose className="close" onClick={closePopup} />
        </div>
      ) : null}
      <div className="img">
        <img src={signupImage} alt="signup" loading="lazy"/>
      </div>
      <div className="content">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Your Name"
              />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>

            <div>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Create A Strong Password "
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field
                type="number"
                id="age"
                name="age"
                placeholder="Enter Your Age"
              />
              <ErrorMessage name="age" component="div" className="error" />
            </div>

            <div>
              <Field
                type="text"
                id="twitter"
                name="twitter"
                placeholder="Enter Your Twitter acount Link"
              />
              <ErrorMessage name="twitter" component="div" className="error" />
            </div>

            <div>
              <Field
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder="Enter Your LinkedIn acount Link"
              />
              <ErrorMessage name="linkedin" component="div" className="error" />
            </div>

            <button type="submit"> {loading ? "loading" : "Submit"}</button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default SignUpForm;
