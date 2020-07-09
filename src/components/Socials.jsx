import React from 'react';
// fontawsome
import { faFacebookSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const iconStyles = {
    facebook: {
        color: "#4267b2",
        fontSize: "5em"
    },
    linkedin: {
        color: "#0073b0",
        fontSize: "5em"
    },
    github: {
        color: "rgb(234, 231, 231)",
        fontSize: "5em"
    }
}

const Socials = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="row text-center d-flex">
                            <div className="col-4 icon justify-content-center align-self-center">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={iconStyles.facebook} icon={faFacebookSquare} /></a>
                            </div>
                            <div className="col-4 icon justify-content-center align-self-center">
                                <a href="https://www.linkedin.com/in/john-merchan-1333bb20/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={iconStyles.linkedin} icon={faLinkedin} /></a>
                            </div>
                            <div className="col-4 icon justify-content-center align-self-center">
                                <a href="https://github.com/johnnyboysydney" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={iconStyles.github} icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Socials;