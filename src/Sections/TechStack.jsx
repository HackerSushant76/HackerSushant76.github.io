import styles from "./TechStack.module.css";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiHtml5,
  SiChakraui,
  SiGit
} from "react-icons/si";
import { GrReactjs, GrNode } from "react-icons/gr";

export function TechStack() {
  return (
    <div className={styles.techStack} id="tech-skills">
      <h1>Tech Stack</h1>
      <div className={styles.techStackgrid}>
        <div>
          <SiHtml5 size={50} color="red" />
          HTML
        </div>
        <div>
          <IoLogoCss3 size={60} color="#264de4" />
          CSS
        </div>
        <div>
          <SiJavascript size={50} color="#F0DB4F" />
          JavaScript
        </div>
        <div>
          <GrReactjs size={50} color="#61DBFB" />
          React JS
        </div>
        <div>
          <SiRedux size={50} color="#764abc" />
          Redux
        </div>
        <div>
          <GrNode size={50} color="green" />
          Node JS
        </div>
        <div>
          <SiChakraui size={50} color="#58f7f7ea" />
          Chakra UI
        </div>
        <div>
          <SiGit size={50} color="#F1502F" />
          Git
        </div>
      </div>
    </div>
  );
}
