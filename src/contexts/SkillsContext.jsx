import React, { useState, createContext } from 'react'
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faSass,
    faBootstrap,
    faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

export const SkillsContext = createContext()

const SkillsContextProvider = (props) => {
    const [skills] = useState([
        {
            id: 1,
            icon: faHtml5,
            style: {
                color: "#e44d26",
                fontSize: "7em"
            }
        },
        {
            id: 2,
            icon: faCss3Alt,
            style: {
                color: "#2299f8",
                fontSize: "7em"
            }
        },
        {
            id: 3,
            icon: faJs,
            style: {
                color: "#f7df1e",
                fontSize: "7em"
            }
        },
        {
            id: 4,
            icon: faReact,
            style: {
                color: "#5dd9fb",
                fontSize: "7em"
            }
        },
        {
            id: 5,
            icon: faSass,
            style: {
                color: "#c76495",
                fontSize: "7em"
            }
        },
        { 
            id: 7,
            icon: faBootstrap,
            style: {
                color: "#5d3e88",
                fontSize: "7em"
            }
        },
        {
            id: 8,
            icon: faNodeJs,
            style: {
                color: "#87c000",
                fontSize: "7em"
            }
        }
    ])
    return (
        <SkillsContext.Provider value={{ skills }}>
            {props.children}
        </SkillsContext.Provider>
    )
}

export default SkillsContextProvider