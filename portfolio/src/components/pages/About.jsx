import {Overlay} from "../Overlay"
import image from "../../assets/profile.webp"
import resume from "../../assets/Resume.pdf"
import {BsCodeSlash} from "react-icons/bs"
import {FaPaintBrush} from "react-icons/fa"
import {Title} from "../Title"
import {useEffect, useState} from 'react';
import {AnimatedElement} from "../MotionElement"
export const About = () => {
    const [name, setName] = useState('');
    const typedName = 'Mahmoud Mohamed'; // Replace with your name
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
        // Adjust the typing speed (milliseconds)

        // Cleanup interval on unmount
        return() => clearInterval(interval);
    }, []);
    return (
        <div className="about">
            <Overlay/>
            <Title title="About Me"/>
            <div className="content">
                <div className="img">
                    <img src={image}
                        alt="mahmoud mohamed"/>
                    <div className='right'></div>
                    <div className="left"></div>
                </div>
                <div className="text">
                    <h3>Hi, I am {" "}
                        <span>{name}</span>
                    </h3>
                    <AnimatedElement>

                        <p>I'm Mahmoud Mohamed, a dedicated MERN stack developer with expertise in React.js, JavaScript, Node.js, Express, and MongoDB. I thrive on tackling complex challenges, continually learning new technologies, and delivering high-quality solutions. Let's create something amazing together! 🍬</p>
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
                                :22 Years</li>
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
            <div className="devider"></div>
            <div className="services">
                <AnimatedElement>
                    <div className="service">
                        <FaPaintBrush className="icon"/>
                        <h3>Web Design</h3>
                        <hr/>
                        <p>Web design is the art of creating visually striking and intuitive website interfaces that captivate users and convey a  identity.</p>
                        <p>It involves meticulous attention to layout, color, typography, and user experience to ensure websites are not only attractive but also user-friendly.</p>

                    </div>
                </AnimatedElement>
                <AnimatedElement>
                    <div className="service">
                        <BsCodeSlash className="icon"/>

                        <h3>Front End Development</h3>
                        <hr/>
                        <p>Front-end development transforms static web designs into dynamic, interactive, and responsive websites by using HTML, CSS, and JavaScript.</p>
                        <p>Front-end developers focus on optimizing user interface and functionality, ensuring seamless user experiences across various devices and browsers.</p>
                    </div>
                </AnimatedElement>
                <AnimatedElement>
                    <div className="service">
                        <BsCodeSlash className="icon"/>
                        <h3>Mern Stack Development</h3>
                        <hr/>
                        <p>MERN stack development leverages MongoDB, Express.js, React, and Node.js to build scalable and real-time web applications.</p>
                        <p>MERN stack developers work on both the front-end and back-end, enabling the creation of feature-rich and highly customizable web applications that excel in modern web environments.


                        </p>
                    </div>
                </AnimatedElement>
            </div>
        </div>
    )
}
