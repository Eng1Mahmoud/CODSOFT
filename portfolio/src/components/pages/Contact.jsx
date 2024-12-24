import {useState} from 'react';
import {Title} from "../Title"
import {Overlay} from "../Overlay"
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {AiFillPhone} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import emailjs from '@emailjs/browser';
import {AnimatedElement} from "../MotionElement"
import {AiOutlineClose} from "react-icons/ai"
const validationSchema = Yup.object().shape({user_name: Yup.string().required('Name is required'), user_email: Yup.string().email('Invalid email').required('Email is required'), message: Yup.string().required('Message is required')});

export const Contact = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const initialValues = {
        user_name: '',
        user_email: '',
        message: ''
    };

    const onSubmit = (values, {resetForm}) => { // Handle form submission here
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
            to_name: 'Mahmoud',
            user_name: values.user_name,
            user_email: values.user_email,
            message: values.message
        }, import.meta.env.VITE_EMAILJS_USER_ID).then(() => {
            setIsSuccess(true); // Set success state to true
        }).catch(() => {
            setIsError(true); // Set error state to true
        });
        resetForm();
    };
    return (
        <div className="contact">
            <Overlay/>
            <Title title="Contact Me"/>

            <div className='contact_contener'>

                <div className="send_email">
                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        <> {/* Success Popup */}
                            {
                            isSuccess && (
                                <div className="success-popup">
                                    <p>Message sent successfully!</p>


                                    <AiOutlineClose className="popup-close-button"
                                        onClick={
                                            () => setIsSuccess(false)
                                        }/>
                                </div>
                            )
                        }

                            {/* Error Popup */}
                            {
                            isError && (
                                <div className="error-popup">
                                    <p>Message sending failed. Please try again later.</p>
                                    <AiOutlineClose className="popup-close-button"
                                        onClick={
                                            () => setIsSuccess(false)
                                        }/>
                                </div>
                            )
                        }
                            <Form>
                                <AnimatedElement>
                                    <div className="form-group">

                                        <Field type="text" id="user_name" name="user_name" className="form-control" placeholder="Enter Your Name"/>
                                        <ErrorMessage name="user_name" component="div" className="error"/>
                                    </div>
                                </AnimatedElement>
                                <AnimatedElement>
                                    <div className="form-group">

                                        <Field type="email" id="user_email" name="user_email" className="form-control" placeholder="Enter Your Email"/>
                                        <ErrorMessage name="user_email" component="div" className="error"/>
                                    </div>
                                </AnimatedElement>
                                <AnimatedElement>
                                    <div className="form-group">

                                        <Field as="textarea" id="message" name="message" rows="8" className="form-control" placeholder="Enter Your Message"/>
                                        <ErrorMessage name="message" component="div" className="error"/>
                                    </div>
                                </AnimatedElement>
                                <AnimatedElement>
                                    <button type="submit">Send</button>
                                </AnimatedElement>
                            </Form>

                        </>
                    </Formik>
                </div>
                <div className='contact_info'>
                    <AnimatedElement>
                        <div className="item">
                            <div className="left">
                                <AiFillPhone className="icon"/>
                            </div>
                            <div className="right">
                                <h3>Phone</h3>
                                <p>+201201453941</p>
                                <p>+201125948712</p>

                            </div>
                        </div>
                    </AnimatedElement>
                    <AnimatedElement>
                        <div className="item">
                            <div className="left">
                                <AiOutlineMail className="icon"/>
                            </div>
                            <div className="right">
                                <h3>Email</h3>
                                <p>mahmoudabbamalik@gmail.com</p>
                                <p>engm9690@gmail.com</p>

                            </div>
                        </div>
                    </AnimatedElement>
                    <AnimatedElement>
                        <div className="item">
                            <div className="left">
                                <GoLocation className="icon"/>
                            </div>
                            <div className="right">
                                <h3>Address</h3>
                                <p>Egypt, 6th of October City</p>


                            </div>
                        </div>
                    </AnimatedElement>
                </div>

            </div>

        </div>
    )
}
