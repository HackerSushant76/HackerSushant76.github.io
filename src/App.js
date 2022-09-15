import { SiChakraui } from "react-icons/si";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { About } from "./Sections/About";
import { Education } from "./Sections/Education";
import { Introduction } from "./Sections/Introduction";
import { TechStack } from "./Sections/TechStack";
import { Skills } from "./Sections/Skills";
import { Projects } from "./Sections/Projects";

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
    </div>
  );
}

export default App;
