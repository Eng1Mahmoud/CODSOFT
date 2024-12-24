import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const validationSchema = yup
  .object()
  .shape({ user_code: yup.string().required("User Code is required") });

const initialValues = {
  user_code: "",
};

const Verification = () => {
  const [signUp, setSignUp] = useState(false);
  const [loading,setLoading]=useState(false)
    const [verifid, setVerifid ] = useState({ verifid: false, message: "" });
  const navigate = useNavigate();

  // close popup
    const closePopup = () => {
      setVerifid({ verifid: false, message: "" });
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
        setLoading(true)
      const data = {
        user_code: values.user_code,
        user: JSON.parse(sessionStorage.getItem("user")),
        verification_code: sessionStorage.getItem("verification_code"),
      };
      const response = await axios.post(
        "https://quizs-wg02.onrender.com/api/verification",
        data
      );
      setLoading(false)
      resetForm();
      if (response.data.verification) {
        setSignUp(true);
      }
      else{
        setVerifid({ verifid: true, message: response.data.message });
      }
    } catch (error) {}
  };
  return (
    <section className="verification">
         {verifid.verifid ? (
        <div className="popup">
          <p> {verifid.message}</p>
          <AiOutlineClose className="close" onClick={closePopup} />
        </div>
      ) : null}
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
