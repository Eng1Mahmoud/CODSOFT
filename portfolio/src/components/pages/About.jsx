import { Overlay } from "../Overlay"
import image from "../../assets/profile.webp"
import resume from "../../assets/Resume.pdf"
import { BsCodeSlash } from "react-icons/bs"
import { FaPaintBrush } from "react-icons/fa"
import { Title } from "../Title"
import { useEffect, useState } from 'react';
import { AnimatedElement } from "../MotionElement"

export const About = () => {
    const [name, setName] = useState('');
    const typedName = 'Mahmoud Mohamed'; // Replace with your name

    // Function to calculate age
    const calculateAge = (birthDate) => {
        const dob = new Date(birthDate);
        const diff_ms = Date.now() - dob.getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= typedName.length) {
                setName(typedName.slice(0, currentIndex));
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        }, 300);


        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about">
            <Overlay />
            <Title title="About Me" />
            <div className="content">
                <div className="img">
                    <img src={image}
                        alt="mahmoud mohamed" />
                    <div className='right'></div>
                    <div className="left"></div>
                </div>
                <div className="text">
                    <h3>Hi, I am {" "}
                        <span>{name}</span>
                    </h3>
                    <AnimatedElement>

                        <p>
                            Hi My name is Mahmoud
                            a graduate of the Faculty of Computers and Artificial Intelligence. I have extensive experience in the field of the front end, and in addition to that, good experience in the field of the back end. (React Developer - Nodejs )
                            I work currently in an Egyptian startup company.
                        </p>
                    </AnimatedElement>
                    <ul>
                        <AnimatedElement>
                            <li>
                                <b>Full Name</b>
                                :Mahmoud Mohamed</li>
                        </AnimatedElement>
                        <AnimatedElement>
                            <li>
                                <b>Age</b>
                                :{calculateAge('2001-03-26')} Years</li> {/* Call the function here */}
                        </AnimatedElement>
                        <AnimatedElement>
                            <li>
                                <b>Nationality</b>
                                :Egyptian</li>
                        </AnimatedElement>
                        <AnimatedElement>
                            <li>
                                <b>Languages</b>
                                :Arabic, English</li>
                        </AnimatedElement>
                        <AnimatedElement>
                            <li>
                                <b>Address</b>

                                :Egypt, 6th of October City</li>
                        </AnimatedElement>
                        <AnimatedElement>

                            <li>
                                <b>Freelance</b>
                                :Available</li>
                        </AnimatedElement>
                    </ul>
                    <a href={resume}
                        download>
                        <button>Download CV</button>
                    </a>
                </div>
            </div>
            <AnimatedElement>
                <h1>SERVICES</h1>
            </AnimatedElement>
            <div className="services">
                <AnimatedElement>
                    <div className="service">
                        <FaPaintBrush className="icon" />
                        <h3>Web Design</h3>
                        <hr />
                        <p>I receive designs from designers and convert them into fully functional, responsive websites using front-end technologies such as HTML, CSS, and JavaScript.</p>
                        <p>This process involves meticulous attention to layout, color, typography, and user experience to ensure the final product is both visually appealing and user-friendly.</p>
                    </div>
                </AnimatedElement>
                <AnimatedElement>
        <div className="service">
            <BsCodeSlash className="icon" />
            <h3>Front End Development</h3>
            <hr />
            <p>As a front-end developer, I specialize in transforming static designs into dynamic, interactive, and responsive websites. Utilizing HTML, CSS, and JavaScript, I ensure that each website not only looks stunning but also performs seamlessly across all devices and browsers.</p>
            <p>My expertise includes integrating with back-end systems and working with APIs to create cohesive and functional web applications. I focus on delivering an optimal user interface and experience, implementing best practices for accessibility, performance, and scalability.</p>
        </div>
    </AnimatedElement>
                <AnimatedElement>
                    <div className="service">
                        <BsCodeSlash className="icon" />
                        <h3>Full Stack Development</h3>
                        <hr />
                        <p>As a full stack developer, I specialize in building comprehensive web applications using Next.js and the MERN stack (MongoDB, Express.js, React, Node.js).</p>
                        <p>I take designs provided by designers and convert them into fully responsive and professional websites. My role involves working on both the front-end and back-end, ensuring robust, scalable, and high-performance web solutions.</p>
                        <p>Using Next.js, I create server-side rendered applications and API routes, while with the MERN stack, I build dynamic, real-time applications that excel in modern web environments. My focus is on delivering feature-rich and highly customizable web applications tailored to meet client needs.</p>
                    </div>
                </AnimatedElement>
            </div>

        </div>
    )
}