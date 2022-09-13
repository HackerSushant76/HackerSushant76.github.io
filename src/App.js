import './App.css';
import { Navbar } from './Components/Navbar';
import { About } from './Sections/About';
import { Education } from './Sections/Education';
import { Introduction } from './Sections/Introduction';
import { Skills } from './Sections/Skills';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Introduction/>
      <About />
      <Education/>
      <Skills/>
    </div>
  );
}

export default App;
