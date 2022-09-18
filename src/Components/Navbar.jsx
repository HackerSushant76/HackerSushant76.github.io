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
          <a href="https://drive.google.com/file/d/15xOAIZrGRwp0L9ueEs_8EbfXA_JlC16H/view?usp=sharing" target="_blank">Resume <AiOutlineDownload size={20} /></a>
        </div>
      </div>
    </div>
  );
}
