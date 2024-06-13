import { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Overlay } from "../Overlay"
import { motion } from "framer-motion";
export const Home = () => {

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    const ulVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
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
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="home">
            <Overlay />
            <div className="container_home">

                <h1>Hi, I am {" "}
                    <span>{name}</span>
                </h1>

                <motion.p initial="hidden" animate="visible"
                    variants={textVariants}
                    transition={
                        { duration: 1.5 }
                    }
                // Adjust the animation duration as needed
                >
                    Hi My name is Mahmoud a graduate of the Faculty of Computers and Artificial Intelligence. I have extensive experience in the field of the front end, and in addition to that, good experience in the field of the back end. (React Developer - Nodejs ) I work currently in an Egyptian startup 🍬
                </motion.p>
                <motion.ul initial="hidden" animate="visible"
                    variants={ulVariants}
                    transition={
                        { duration: 1.5 }
                    }
                // Adjust the animation duration as needed
                >
                    <li>
                        <a href="https://www.linkedin.com/in/mahmoud-mohamed-abdel-aal"><FaLinkedin className='icon' /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ABAAMALIK1"><FaTwitter className='icon' /></a>
                    </li>
                    <li>
                        <a href="https://github.com/Eng1Mahmoud"><FaGithub className='icon' /></a>
                    </li>
                </motion.ul>

            </div>

        </section>
    )
}
