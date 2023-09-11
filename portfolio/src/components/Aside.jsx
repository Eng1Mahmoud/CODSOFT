import profile from "../assets/profile.webp";
import {useNavigate, useLocation} from "react-router-dom";
import resume from "./../assets/Resume.pdf"
export const Aside = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'About',
            path: '/about'
        },
        {
            label: 'Skills',
            path: '/skills'
        },
        {
            label: 'Projects',
            path: '/projects'
        }, {
            label: 'Contact',
            path: '/contact'
        },
    ];

    const isActive = (path) => location.pathname === path;

    const handleNavigate = (route) => {
        navigate(route);
    };

    return (
        <aside className="aside">
            <div className="avatar">
                <img src={profile}
                    alt="avatar"/>
            </div>

            <div className="ul">
                <ul> {
                    menuItems.map((item, index) => (
                        <li key={index}
                            onClick={
                                () => handleNavigate(item.path)
                            }
                            className={
                                isActive(item.path) ? 'active' : ''
                        }>
                            {
                            item.label
                        } </li>
                    ))
                } </ul>
                <div className="cv">
                <a href={resume}
                    download className="resume">
                 Download CV
                </a>
                </div>
            </div>

            <p className="copyRight">©2023 Mahmoud Mohamed</p>
        </aside>
    );
};
