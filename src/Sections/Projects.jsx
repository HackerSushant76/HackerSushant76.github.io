import styles from "./Projects.module.css";
import { BsGithub } from "react-icons/bs";
import { FiGithub, FiExternalLink } from "react-icons/fi";
const data = [
  {
    img_url: "tripoto.PNG",
    name : "Tripoto Clone",
    desc: `This is a clone of Tripoto.com. Tripoto is a travelling website.This is a collaborative project 
    of 5 members and we completed it in 4 days. This clone has various functionalities like 
    carousel effects, slideshows and google authentication, etc. It is a fully responsive website.`,
    tech: ["React" ,"Chakra UI" ,"Firebase","CSS" , "NPM" ],
    github : "https://github.com/HackerSushant76/flowery-ear-2957",
    deployed : "https://rct211-tripoto-clone.netlify.app/"
  },
  {
    img_url: "everhour.png",
    name: "Everhour Clone",
    desc: `This is a clone of Everhour.com, It is an individual project built in 4 days. 
            It is an optimised application which loads very fast on any render.
            React Routing is used for navigation which helps to navigate faster without 
            reloading the whole page.`,
    tech: ["React", "Chakra UI", "HTML", "CSS", "NPM"],
    github:
      "https://github.com/HackerSushant76/even-party-7284/tree/main/ever-hour-dot-com",
    deployed: "https://ever-hour-dot-com.vercel.app/",
  },
  {
    img_url: "beautybebo.png",
    name: "Beautybebo Clone",
    desc: ` Beautybebo is a makeup products shopping website, 
    I made its clone with my other five group members as it was a collaborative project.
     This clone has all the functionality of a shopping website like Cart page, 
     wishlist page, login/Signup, Payment page. `,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/HackerSushant76/BeautyBebo",
    deployed: "https://rainbow-frangipane-7695ac.netlify.app/",
  },
  {
    img_url: "banggood.png",
    name: "Banggood Clone",
    desc: ` Banggood is one of the best electronic devices and goods e-commerce websites.
     It is a fully functional clone, which has login/Signup , products page and cart page as well.
    This is a collaborative project made in 5 days with other five group members.`,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ravipandeydu/banggood",
    deployed: "https://fancy-alpaca-9faea3.netlify.app/",
  },
];
export function Projects() {
  return (
    <div className={styles.project} id="project">
      <h1>Projects</h1>
      {data.map((elem) => (
        <div >
          <div className={styles.imgDiv}>
            <img src={elem.img_url} alt="p1" width="100%" height="100%" />
          </div>
          <div className={styles.desc}>
            <div className={styles.headbox}>
              <p className="bright-text">Featured Project</p>
              <h2>{elem.name}</h2>
            </div>
            <div className={styles.descbox}><span className="s-dark-text">{elem.desc}</span></div>
            <div className={styles.tech}>
              {elem.tech.map((item) => (
                <div>{item}</div>
              ))}
            </div>
            <div className={styles.linkbox} >
              <a href={elem.github} target="_blank" className="hover">
                <FiGithub size="2rem" />
              </a>
              <a href={elem.deployed} target="_blank" className="hover">
                <FiExternalLink size="2rem" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
