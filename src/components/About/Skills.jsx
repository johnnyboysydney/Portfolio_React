import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ skills }) => {
    return (
        <div className="col-sm-3 col-xs-12">
            <figure>
                <FontAwesomeIcon
                    style={skills.style}
                    icon={skills.icon}
                />
            </figure>
        </div>
    )
}

export default Skills
