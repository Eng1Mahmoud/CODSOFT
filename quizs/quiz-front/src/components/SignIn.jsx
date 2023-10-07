import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";
import signinImage from "../assets/signin.jpg";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ exist: false, message: "" });
  const [loading, setLoading] = useState(false);
  const closePopup = () => {
    setError({ exist: false, message: "" });
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://quizs-wg02.onrender.com/api/login",
        values
      );
      setLoading(false);
      Cookies.set("token", response.data.token);
      resetForm();
      if (response.data.error === false) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setTimeout(() => {
          setError({ exist: true, message: response.data.message });
        }, 1000);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  return (
    <section className="signin">
      {error.exist ? (
        <div className="popup">
          <p> {error.message}</p>
          <AiOutlineClose className="close" onClick={closePopup} />
        </div>
      ) : null}
      <div className="img">
        <img src={signinImage} alt="signup" loading="lazy" />
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
                placeholder="Enter Your Password "
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <button type="submit">{loading ? "Loading" : "Login"}</button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default SignIn;
