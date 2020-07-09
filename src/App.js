import React from 'react';
import Navigation from "./components/Navigation.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Projects/Portfolio.jsx";
import LineBreak from "./components/LineBreak.jsx";
import Contact from "./components/Contact.jsx";
import Socials from "./components/Socials.jsx";
import Header from "./components/Header.jsx";
import SkillsContextProvider from './contexts/SkillsContext.jsx';

// aos
import 'aos/dist/aos.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import ProjectsContextProvider from './contexts/ProjectsContext.jsx';


function App() {
  return (
    <SkillsContextProvider>
      <ProjectsContextProvider>
        <div id="wrapper">
          <header>
            <Navigation />
            <Header />
          </header>
          <main>
            <About />
            <LineBreak />
            <Portfolio />
            <LineBreak />
            <Contact />
          </main>
          <footer className="bg-dark">
            <Socials />
          </footer>
        </div>
      </ProjectsContextProvider>
    </SkillsContextProvider>
  );
}

export default App;
