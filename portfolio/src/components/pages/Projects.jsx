import { useState, useMemo } from "react";
import { Title } from "../Title";
import { Overlay } from "../Overlay";
import bus from "../../assets/bus.webp";
import event from "../../assets/event.webp";
import millionaire from "../../assets/millionaire.webp";
import quran from "../../assets/quran.webp";
import tech from "../../assets/tech.webp";
import weather from "../../assets/weather.webp";
import notes from "../../assets/notes.webp";
import foody from "../../assets/foody.webp";
import azkary from "../../assets/azkary.webp";
import tailwind from "../../assets/tailwind-practice.png";
import e_commerce from "../../assets/e-commerce-nextjs.png";

import { FaGithub } from "react-icons/fa";
import { AnimatedElement } from "../MotionElement";
import { AiFillChrome } from "react-icons/ai";

const projectsData = [
    {
        id: 1,
        name: "E-commerce",
        category: "fullstack",
        image: e_commerce,
        linkGithub: "",
        linkLive: "https://e-commerce-next-app-nine.vercel.app/",
        privet: true
    },
    {
        id: 2,
        name: "Tailwind Practice",
        category: "frontend",
        image: tailwind,
        linkGithub: "https://github.com/Eng1Mahmoud/tailwind-typescript-project",
        linkLive: "https://tailwind-typescript-project.vercel.app/",
        privet: false
    },
    {
        id: 3,
        name: "Bus",
        category: "fullstack",
        image: bus,
        linkGithub: "https://github.com/Eng1Mahmoud/Bus-Booking",
        linkLive: "https://bus-booking.vercel.app/",
        privet: false
    },
    {
        id: 4,
        name: "Event",
        category: "html-css-js",
        image: event,
        linkGithub: "https://github.com/Eng1Mahmoud",
        linkLive: "https://events12.netlify.app/",
        privet: false
    },
    {
        id: 5,
        name: "Tech",
        category: "html-css-js",
        image: tech,
        linkGithub: "https://github.com/Eng1Mahmoud/javascript_apps",
        linkLive: "https://techies1.netlify.app/",
        privet: false
    },
    {
        id: 6,
        name: "millionaire",
        category: "fullstack",
        image: millionaire,
        linkGithub: "https://github.com/Eng1Mahmoud/millionaire",
        linkLive: "millionaire-ecru.vercel.app/",
        privet: false
    },
    {
        id: 7,
        name: "foody",
        category: "frontend",
        image: foody,
        linkGithub: "https://github.com/Eng1Mahmoud/Foody",
        linkLive: "https://foody-tan.vercel.app/",
        privet: false
    },
    {
        id: 8,
        name: "quran",
        category: "frontend",
        image: quran,
        linkGithub: "https://github.com/Eng1Mahmoud/Quran",
        linkLive: "https://quran-neon.vercel.app/",
        privet: false
    },
    {
        id: 9,
        name: "weather",
        category: "frontend",
        image: weather,
        linkGithub: "https://github.com/Eng1Mahmoud/Weather",
        linkLive: "https://weather-fawn-five.vercel.app/",
        privet: false
    },
    {
        id: 10,
        name: "notes",
        category: "frontend",
        image: notes,
        linkGithub: "https://github.com/Eng1Mahmoud/Notes",
        linkLive: "https://notes-bay-one.vercel.app/",
        privet: false
    },
    {
        id: 11,
        name: "azkary",
        category: "frontend",
        image: azkary,
        linkGithub: "https://github.com/Eng1Mahmoud/Azkar",
        linkLive: "https://azkar-silk.vercel.app/",
        privet: false
    }
];

export const Projects = () => {
    const [category, setCategory] = useState("all");

    const handleFilter = (filter) => {
        setCategory(filter);
    };

    const filteredProjects = useMemo(() => {
        return category === "all"
            ? projectsData
            : projectsData.filter((project) => project.category === category);
    }, [category]);

    return (
        <div className="projects">
            <Overlay />
            <Title title="projects" />
            <AnimatedElement>
                <div className="filter-buttons">
                    <button onClick={() => handleFilter("all")}>All</button>
                    <button onClick={() => handleFilter("frontend")}>Frontend</button>
                    <button onClick={() => handleFilter("fullstack")}>Full-Stack</button>
                </div>
            </AnimatedElement>

            <div className="filtered-projects">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project">
                        <AnimatedElement>
                            <div className="image">
                                <img src={project.image} alt="project" loading="lazy" />
                            </div>
                            <div className="project-info">
                                {!project.privet && (
                                    <a href={project.linkGithub}>
                                        <FaGithub className="icon" />
                                    </a>
                                )}
                                <a href={project.linkLive}>
                                    <AiFillChrome className="icon" />
                                </a>
                            </div>
                        </AnimatedElement>
                    </div>
                ))}
            </div>
        </div>
    );
};
