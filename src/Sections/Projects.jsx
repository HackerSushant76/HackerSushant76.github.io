import styles from "./Projects.module.css";
import { BsGithub } from "react-icons/bs";
import { FiGithub, FiExternalLink } from "react-icons/fi";
const data = [
  {
    img_url: "everhour.png",
    name: "Everhour Clone",
    desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Repellendus rerum, quam debitis error non, ex ipsa labore quia sed
        eveniet beatae, quasi dolore! Eaque, a cum voluptate libero dolores
        ex.`,
    tech: ["React", "Chakra UI", "HTML", "CSS", "NPM"],
    github:"https://github.com/HackerSushant76/even-party-7284",
    deployed: "https://ever-hour-dot-com.vercel.app/"
  },
  {
    img_url: "beautybebo.png",
    name: "Beautybebo Clone",
    desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Repellendus rerum, quam debitis error non, ex ipsa labore quia sed
        eveniet beatae, quasi dolore! Eaque, a cum voluptate libero dolores
        ex.`,
    tech: ["HTML", "CSS", "JavaScript"],
    github:"https://github.com/HackerSushant76/BeautyBebo",
    deployed: "https://rainbow-frangipane-7695ac.netlify.app/"
  },
  {
    img_url: "banggood.png",
    name: "Banggood Clone",
    desc: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Repellendus rerum, quam debitis error non, ex ipsa labore quia sed
        eveniet beatae, quasi dolore! Eaque, a cum voluptate libero dolores
        ex.`,
    tech: [ "HTML", "CSS", "JavaScript"],
    github:"https://github.com/ravipandeydu/banggood",
    deployed: "https://fancy-alpaca-9faea3.netlify.app/"
  },
];
export function Projects() {
  return (
    <div className={styles.project} id="project">
      <h1>Projects</h1>
      {data.map((elem) => (
        <div>
          <div className={styles.imgDiv}>
            <img src={elem.img_url} alt="p1" width="100%" height="100%" />
          </div>
          <div className={styles.desc}>
            <div className={styles.headbox}>
              <p className="bright-text">Featured Project</p>
              <h2>{elem.name}</h2>
            </div>
            <div className={styles.descbox}>
              {elem.desc}
            </div>
            <div className={styles.tech}>
                {elem.tech.map(item=> <div>{item}</div>)}
            </div>
            <div className={styles.linkbox}>
              <a href={elem.github} target="_blank"><FiGithub size="2rem" /></a>
              <a href={elem.deployed} target="_blank"><FiExternalLink size="2rem" /></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
