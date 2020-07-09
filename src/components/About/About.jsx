import React, {useContext} from "react";
import JM from "../../img/JM.PNG";
import { SkillsContext } from "../../contexts/SkillsContext";
import Skills from "./Skills";

const About = () => {

  const {skills} = useContext(SkillsContext)

  const skillsList = skills.map(s => <Skills skills={s} key={s.id}/>)

  return (
    <div>
      <section className="about" id="om-mig">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 justify-content-center align-self-center">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-6 offset-3 col-md-4 offset-md-4">
                      <img
                        src={JM}
                        alt="JM"
                        className="img-fluid profile"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <h1 className="text-light yellow-text">Who am I?</h1>
                  <p className="text-light">
                    A motivated and professional IT System Administrator with more than 10 years’ commercial experience from a hospitality environment. 
                    Primarily focused on providing support to Windows based solutions, I have also installed and configured hardware and software technologies, 
                    various bespoke architectures and applications and managed people at all levels of experience. I am a firm believer in root cause analysis,
                   fault-prevention, forward planning, documentation and adhering to commercial standards..
                  </p>
                  <p className="text-light">
                  I assist my clients with their IT solutions,
                   ranging from small, medium to enterprise level. 
                   Utilizing my knowledge and experience in delivering supurb experiences, from any where in the world.
                    </p>
                </div>
              </div>
              <div className="row pt-5">
                <section className="skills col-12">
                  <div className="row">
                    <div className="col-12 text-center yellow-text pt-3">
                      <h1>Skills</h1>
                    </div>
                  </div>
                  <div className="row pt-5 text-center">
                    {skillsList}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
