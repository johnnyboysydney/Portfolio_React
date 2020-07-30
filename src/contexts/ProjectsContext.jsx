import React, { useState, createContext } from 'react';

// img
import portImg1 from "../img/port1.PNG";
import portImg2 from "../img/port2.PNG";
import portImg3 from "../img/port3.PNG";
import portImg4 from "../img/port4.PNG";
import portImg5 from "../img/port5.PNG";
import portImg6 from "../img/port6.PNG";
import portImg7 from "../img/port7.PNG";

// fontawesome
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const ProjectsContext = createContext();

const ProjectsContextProvider = (props) => {

    const [projects] = useState([
        {
            id: 1,
            img: portImg1,
            codeUrl: "https://github.com/johnnyboysydney/Employee_Directory_React",
            liveUrl: "https://ancient-cove-30926.herokuapp.com/",
            iconLive: faEye,
            iconCode: faGithub,
            style: {
                color: "rgb(234, 231, 231)",
                fontSize: "30px"
            }
        },
        {
            id: 2,
            img: portImg2,
            codeUrl: "https://github.com/johnnyboysydney/JnTnD-BnB",
            liveUrl: "https://peaceful-plains-43046.herokuapp.com/",
            iconLive: faEye,
            iconCode: faGithub,
            style: {
                color: "rgb(234, 231, 231)",
                fontSize: "30px"
            }
        },
        {
            id: 3,
            img: portImg3,
            codeUrl: "https://github.com/johnnyboysydney/Employee-Tracker",
            liveUrl: "https://github.com/johnnyboysydney/Employee-Tracker/",
            iconLive: faEyeSlash,
            iconCode: faGithub,
            style: {
                color: "rgb(234, 231, 231)",
                fontSize: "30px"
                
            },
            linkStyle: {
                cursor: "not-allowed",
                pointerEvents: "none"
            }
        },
        {
            id: 4,
            img: portImg4,
            codeUrl: "https://github.com/johnnyboysydney/README.md_Generator",
            liveUrl: "https://github.com/johnnyboysydney/README.md_Generator",
            iconLive: faEye,
            iconCode: faGithub,
            style: {
                color: "rgb(234, 231, 231)",
                fontSize: "30px"
                
            }
            
        },
        {
            id: 4,
            img: portImg5,
            codeUrl: "https://github.com/johnnyboysydney/PasswordGenerator",
            liveUrl: "https://johnnyboysydney.github.io/PasswordGenerator/",
            iconLive: faEye,
            iconCode: faGithub,
            style: {
                color: "rgb(234, 231, 231)",
                fontSize: "30px"
                
            }
            
        },
        {
            id: 5,
            img: portImg6,
            codeUrl: "https://github.com/johnnyboysydney/Portfolio_React",
            liveUrl: "https://brave-wright-72a364.netlify.app/",
            iconLive: faEye,
            iconCode: faGithub,
            style: {
                color: "rgb(234, 231, 231)",
                fontSize: "30px"
                
            }
        },
        {
            id: 6,
            img: portImg7,
            codeUrl: "https://github.com/johnnyboysydney/Online_Marketplace_Net",
            liveUrl: "https://online-marketplace-net.herokuapp.com/",
            iconLive: faEye,
            iconCode: faGithub,
            style: {
                color: "rgb(234, 231, 231)",
                fontSize: "30px"
                
            }
        }

    ])

return (
    <ProjectsContext.Provider value={{ projects }}>
        {props.children}
    </ProjectsContext.Provider>
)
}

export default ProjectsContextProvider;