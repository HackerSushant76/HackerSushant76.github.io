import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { AiOutlineDownload } from "react-icons/ai";
import { LogoAni } from "./LogoAni";

const links = [
  {
    path: "about",
    title: "About",
  },
  {
    path: "experience",
    title: "Experience",
  },
  {
    path: "tech-skills",
    title: "Tech",
  },
  {
    path: "project",
    title: "Projects",
  },
];
export function Navbar() {
  return (
    <div id="navbar">
      <div>
        <Link
          activeClass="active"
          to="introduc"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          <LogoAni />
        </Link>
      </div>
      <div className="opacity">
        {links.map((elem) => (
          <Link
            key={elem.title}
            className="bright-white hover"
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
        <div className="bright-butt resume">
          <a href="/Sushant_Yadav_Resume.pdf" download="Sushant_Yadav_Resume.pdf">Resume <AiOutlineDownload size={20} /></a>
        </div>
      </div>
    </div>
  );
}
