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
                    I'm Mahmoud Mohamed, a dedicated MERN stack developer with expertise in React.js, JavaScript, Node.js, Express, and MongoDB. I thrive on tackling complex challenges, continually learning new technologies, and delivering high-quality solutions. Let's create something amazing together! 🍬
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
