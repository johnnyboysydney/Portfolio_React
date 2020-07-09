import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Project = ({ project }) => {
    let p = project
    return (
        <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 mb-5">
            <div className="row">
                <div className="col-12">
                    <figure>
                        <img className="img-fluid" src={p.img} alt="" />
                    </figure>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <a
                        className="btn btn-secondary w-100 mb-2 btn-git"
                        href={p.liveUrl} target="_blank" rel="noopener noreferrer" style={p.linkStyle}>
                        <FontAwesomeIcon style={p.style} icon={p.iconLive} />
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <a
                        className="btn btn-secondary w-100 bg-dark border-dark"
                        href={p.codeUrl} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={p.style} icon={p.iconCode} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
