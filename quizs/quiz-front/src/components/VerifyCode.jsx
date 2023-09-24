import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const validationSchema = yup
  .object()
  .shape({ user_code: yup.string().required("User Code is required") });

const initialValues = {
  user_code: "",
};

const Verification = () => {
  const [signUp, setSignUp] = useState(true);
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate();
  const handleSubmit = async (values, { resetForm }) => {
    try {
        setLoading(true)
      const data = {
        user_code: values.user_code,
        user: JSON.parse(sessionStorage.getItem("user")),
        verification_code: sessionStorage.getItem("verification_code"),
      };
      const response = await axios.post(
        "https://quizs-wg02.onrender.com/verification",
        data
      );
      setLoading(false)
      resetForm();
      if (response.data.verification) {
        setSignUp(true);
      }

      console.log("User signed up successfully:", response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  return (
    <section className="verification">
      <div className="content">
        {signUp ? (
          <div className="sucsess-add">
            <h1>Verification Successful</h1>
            <button onClick={() => navigate("/signin")}>Login</button>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <Field
                  type="text"
                  id="user_code"
                  name="user_code"
                  placeholder="Enter Your Verify Code"
                />
                <ErrorMessage
                  name="user_code"
                  component="div"
                  className="error"
                />
              </div>

              <button type="submit">{loading?"Loading":"Send Code"}</button>
            </Form>
          </Formik>
        )}
      </div>
    </section>
  );
};

export default Verification;
