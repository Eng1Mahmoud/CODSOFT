import { Overlay } from "../Overlay";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaSass, FaReact } from 'react-icons/fa';
import { SiMui } from "react-icons/si"
import { BiLogoRedux } from "react-icons/bi"
import { BiLogoNodejs } from "react-icons/bi"
import { SiExpress } from "react-icons/si"
import { BiLogoMongodb } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { Title } from "../Title"
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const skills = {
    html: <FaHtml5 className="icon" />,
    css: <FaCss3Alt className="icon" />,
    js: <FaJsSquare className="icon" />,
    bootstrap: <FaBootstrap className="icon" />,
    sass: <FaSass className="icon" />,
    react: <FaReact className="icon" />,
    mui: <SiMui className="icon" />,
    redux: <BiLogoRedux className="icon" />,
    nodeJs: <BiLogoNodejs className="icon" />,
    Express: <SiExpress className="icon" />,
    mongodb: <BiLogoMongodb className="icon" />,
    typescript: <BiLogoTypescript className="icon" />,
};

// eslint-disable-next-line react/prop-types
const Skill = ({ skillKey }) => {
    const [ref, inView] = useInView({ triggerOnce: true });

    const skillVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        if (inView) {
            // You can add additional animations or actions here if needed
        }
    }, [inView]);

    return (
        <motion.div
            ref={ref}
            className="skill"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={skillVariants}
        >
            <div className="icon-div">
                {skills[skillKey]}
                <p>{skillKey}</p>
            </div>
        </motion.div>
    );
};

export const Skills = () => {
    const skillKeys = Object.keys(skills);

    return (
        <div className="skills">
            <Overlay />
            <Title title="Skills" />
            <div className="skills_content">
                {skillKeys.map((key, index) => (
                    <Skill key={index} skillKey={key} />
                ))}
            </div>
        </div>
    );
};
