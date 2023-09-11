import {useState} from "react";
import {Title} from "../Title";
import {Overlay} from "../Overlay";
import bus from "../../assets/bus.webp";
import event from "../../assets/event.webp";
import millionaire from "../../assets/millionaire.webp";
import quran from "../../assets/quran.webp";
import tech from "../../assets/tech.webp";
import weather from "../../assets/weather.webp";
import notes from "../../assets/notes.webp";
import foody from "../../assets/foody.webp";
import azkary from "../../assets/azkary.webp";
import {FaGithub} from "react-icons/fa";
import {AnimatedElement} from "../MotionElement"
import {AiFillChrome} from "react-icons/ai";
const projectsData = [
    {
        id: 1,
        name: "Bus",
        category: "fullstack",
        image: bus,
        linkGithub: "https://github.com/Eng1Mahmoud/Bus-Booking",
        linkLive: "https://bus-booking.vercel.app/"
    },
    {
        id: 2,
        name: "Event",
        category: "html-css-js",
        image: event,
        linkGithub: "https://github.com/Eng1Mahmoud",
        linkLive: "https://events12.netlify.app/"
    },
    {
        id: 3,
        name: "Tech",
        category: "html-css-js",
        image: tech,
        linkGithub: "https://github.com/Eng1Mahmoud/javascript_apps",
        linkLive: "https://techies1.netlify.app/"
    },
    {
        id: 4,
        name: "millionaire",
        category: "fullstack",
        image: millionaire,
        linkGithub: "https://github.com/Eng1Mahmoud/millionaire",
        linkLive: "millionaire-ecru.vercel.app/"
    }, {
        id: 5,
        name: "foody",
        category: "frontend",
        image: foody,
        linkGithub: "https://github.com/Eng1Mahmoud/Foody",
        linkLive: "https://foody-tan.vercel.app/"
    }, {
        id: 6,
        name: "quran",
        category: "frontend",
        image: quran,
        linkGithub: "https://github.com/Eng1Mahmoud/Quran",
        linkLive: "https://quran-neon.vercel.app/"
    }, {
        id: 7,
        name: " weather",
        category: "frontend",
        image: weather,
        linkGithub: "https://github.com/Eng1Mahmoud/Weather",
        linkLive: "https://weather-fawn-five.vercel.app/"
    }, {
        id: 8,
        name: "notes",
        category: "frontend",
        image: notes,
        linkGithub: "https://github.com/Eng1Mahmoud/Notes",
        linkLive: "https://notes-bay-one.vercel.app/"
    }, {
        id: 9,
        name: "azkary",
        category: "frontend",
        image: azkary,
        linkGithub: "https://github.com/Eng1Mahmoud/Azkar",
        linkLive: "https://azkar-silk.vercel.app/"
    },
];
export const Projects = () => {
    const [category, setCategory] = useState("all");

    const handleFilter = (filter) => {
        setCategory(filter);
    };

    const filteredProjects = category === "all" ? projectsData : projectsData.filter((project) => project.category === category);
    return (
        <div className="projects">
            <Overlay/>
            <Title title="projects"/>
            <AnimatedElement>
                <div className="filter-buttons">
                    <button onClick={
                        () => handleFilter("all")
                    }>All</button>
                    <button onClick={
                        () => handleFilter("frontend")
                    }>Frontend</button>
                    <button onClick={
                        () => handleFilter("fullstack")
                    }>Full-Stack</button>
                </div>
            </AnimatedElement>

            <div className="filtered-projects">
                {
                filteredProjects.map((project) => (

                    <div key={
                            project.id
                        }
                        className="project">
                        <AnimatedElement>
                            <div className="image">
                                <img src={
                                        project.image
                                    }
                                    alt="project"
                                    loading="lazy"/>
                            </div>
                            <div className="project-info">
                                <a href={
                                    project.linkGithub
                                }>
                                    <FaGithub className="icon"/>
                                </a>
                                <a href={
                                    project.linkLive
                                }>
                                    <AiFillChrome className="icon"/>
                                </a>
                            </div>
                        </AnimatedElement>
                    </div>

                ))
            }
                {" "} </div>
        </div>
    );
};
