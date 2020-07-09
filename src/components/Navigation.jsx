import React from "react";

import $ from "jquery";


const Navigation = () => {

  const handleScrollTo = e => {
    var element = $($(e.target).attr("href"));
    $("html, body").stop();
    $("html, body").animate(
      {
        scrollTop: $(element).offset().top
      },
      1000
    );
  };
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
              <a className="navbar-brand" href="index.html">
                <span className="logo">John Merchan</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#wrapper"
                      onClick={handleScrollTo}
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={handleScrollTo}
                      href="#om-mig"
                    >
                      ABOUT ME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#port"
                      onClick={handleScrollTo}
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#contact"
                      onClick={handleScrollTo}
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }



export default Navigation;
