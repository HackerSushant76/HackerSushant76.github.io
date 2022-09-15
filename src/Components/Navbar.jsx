import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {AiOutlineDownload} from "react-icons/ai"

const links = [
  {
    path: "about",
    title: "About me",
  },
  {
    path: "experience",
    title: "Experience",
  },
  {
    path: "tech-skills",
    title: "Tech Stack",
  },
  {
    path: "project",
    title: "Projects",
  },
];
export function Navbar() {
  return (
    <div id="navbar">
        <div><Link
            className="bright-white"
            activeClass="active"
            to="introduc"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
          >
            Intro
          </Link></div>
      <div>
        {links.map((elem) => (
          <Link 
          key={elem.title}
            className="bright-white"
            activeClass="active"
            to={elem.path}
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
          >
            {elem.title}
          </Link>
        ))} 
        <div className="bright-butt">Resume <AiOutlineDownload size={20}/></div>
      </div>
     
    </div>
  );
}
