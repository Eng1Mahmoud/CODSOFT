import {useEffect, useState} from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {Overlay} from "../Overlay"
import {motion} from "framer-motion";
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
        return() => clearInterval(interval);
    }, []);
    return (
        <section className="home">
            <Overlay/>
            <div className="container_home">

                <h1>Hi, I am {" "}
                    <span>{name}</span>
                </h1>

                <motion.p initial="hidden" animate="visible"
                    variants={textVariants}
                    transition={
                        {duration: 1.5}
                    }
                    // Adjust the animation duration as needed
                >
I am an experienced front-end developer with expertise in HTML, CSS, JavaScript, Bootstrap, React, MUI, Redux, Sass, and TypeScript. I create visually appealing and responsive websites and web applications that provide an exceptional user experience. I am committed to delivering high-quality work and exceeding my clients’ expectations. I am always looking for new opportunities to collaborate with businesses and individuals in need of top-tier front-end development services.  🍬
                </motion.p>
                <motion.ul initial="hidden" animate="visible"
                    variants={ulVariants}
                    transition={
                        {duration: 1.5}
                    }
                    // Adjust the animation duration as needed
                >
                    <li>
                        <a href="https://www.linkedin.com/in/mahmoud-mohamed-abdel-aal"><FaLinkedin className='icon'/></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ABAAMALIK1"><FaTwitter className='icon'/></a>
                    </li>
                    <li>
                        <a href="https://github.com/Eng1Mahmoud"><FaGithub className='icon'/></a>
                    </li>
                </motion.ul>

            </div>

        </section>
    )
}
