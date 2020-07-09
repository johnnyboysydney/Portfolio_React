import React, { Component } from "react";
import AOS from 'aos';

class Header extends Component {
  
  constructor(props, context) {
    super(props, context);
    AOS.init({});
  }
  
  UNSAFE_componentWillReceiveProps() {
    AOS.refresh();
  }
  render() {
    return (
      <div className="position-relative">

        <svg className="position-absolute ls1"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1816.11 1194.92">
          <title>JM</title>
          <g id="lines" data-name="Lag 2">
            <g  id="line1" data-name="Lag 1" data-aos-duration="1000" data-aos-delay="600" data-aos="fade-down-left">
              <rect x="-47.48" y="896.75" width="1598.07" height="29.41" rx="14.71" ry="14.71" transform="translate(-266.82 312.7) rotate(-20.04)" />
            </g>      
            <g id="line2" data-aos-duration="1000" data-aos-delay="300" data-aos="fade-down-left">     
              <rect x="265.52" y="268.75" width="1598.07" height="29.41" rx="14.71" ry="14.71" transform="translate(-32.68 381.93) rotate(-20.04)" />
            </g>   
          </g>
        </svg>
        <svg className="position-absolute ls2"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1816.11 1194.92">
          <title>JM</title>
          <g id="lines" data-name="Lag 2">
            <g  id="line3" data-name="Lag 1" data-aos-duration="1000" data-aos-delay="600" data-aos="fade-up-right">
              <rect x="-47.48" y="896.75" width="1598.07" height="29.41" rx="14.71" ry="14.71" transform="translate(-266.82 312.7) rotate(-20.04)" />
            </g>      
            <g id="line4" data-aos-duration="1000" data-aos-delay="300" data-aos="fade-up-right">     
              <rect x="265.52" y="268.75" width="1598.07" height="29.41" rx="14.71" ry="14.71" transform="translate(-32.68 381.93) rotate(-20.04)" />
            </g>   
          </g>
        </svg>

        <section className="front-img">
          <div className="container">
            <div className="row d-flex">
              <div className="col-8 offset-2 justify-content-center align-self-center">
                <div data-aos-duration="1000" data-aos="fade-up" className="jumbotron bg-transparent text-center">
                  <p className="lead">
                    Hello my Name Is{" "}
                    <span className="migtext font-weight-bolder">John Merchan</span>.
                  </p>
                  <p className="lead">I am a FullStack Web Developer.</p>
                  <p className="lead">Using MERN stack.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
