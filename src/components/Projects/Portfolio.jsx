import React, { useContext } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import Project from "./Project";



const Portfolio = () => {

  const {projects} = useContext(ProjectsContext)

  const projectsList = projects.map(p => <Project project={p} key={p.id} /> )

  return (
    <div>
      <section className="portfolio" id="port">
        <div className="container d-flex">
          <div className="justify-content-center align-self-center">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h1 className="text-light yellow-text">Portfolio</h1>
                <p className="lead text-light">
                  Check out some of my projects ...
                </p>
              </div>
            </div>
            <div className="row">
              {projectsList}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Portfolio;
