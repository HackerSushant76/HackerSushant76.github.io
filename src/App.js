import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Introduction } from './Components/Introduction';
import { About } from './Components/About';
import { Education } from './Components/Education';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Introduction/>
      <About />
      <Education/>
    </div>
  );
}

export default App;
