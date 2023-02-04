import './App.css';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import NavBar from './Components/NavBar';
import { Fragment, useCallback } from 'react';
import ProjectsPage from './ProjectsPage';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Fragment>
      <Particles 
        id="tsparticles" 
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: "#000000",
              },
              links: {
                  color: "#000000",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              collisions: {
                  enable: true,
              },
              move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 40,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
          },
          detectRetina: true,
      }}/>
      <NavBar />
      <MainPage />
      <AboutPage />
      <ProjectsPage />
      <ResumePage />
      <ContactPage />
    </Fragment>
  );
}

export default App;
