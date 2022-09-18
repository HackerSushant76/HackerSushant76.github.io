import { SiChakraui } from "react-icons/si";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { About } from "./Sections/About";
import { Education } from "./Sections/Education";
import { Introduction } from "./Sections/Introduction";
import { TechStack } from "./Sections/TechStack";
import { Skills } from "./Sections/Skills";
import { Projects } from "./Sections/Projects";
import { LogoAni } from "./Components/LogoAni";
import { Stats } from "./Sections/Stats";
import { GetInTouch } from "./Sections/GetInTouch";
import { useEffect, useRef } from "react";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction />
      <About />
      <Education />
      <TechStack />
      <Skills/>
      <Projects/>
      <Stats/>
      <GetInTouch/>
    </div>
  );
}

export default App;
