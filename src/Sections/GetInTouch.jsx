import { AiFillLinkedin } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import styles from "./GetIntouch.module.css"
export function GetInTouch(){
    return <div className={styles.touch}>
        <h1>Get In Touch</h1>
        <div className={styles.link}>
        <div className="hover"><a href="https://github.com/HackerSushant76" target="_blank" ><FiGithub size="2rem" /></a></div>
        <div className="hover"><a href="https://www.linkedin.com/in/sushant-singh-yadav-925b4a19a" target="_blank"><AiFillLinkedin size="2rem" /></a></div>
        </div>
        <a className="s-dark-text hover" href="mailto:sushantsingh76626@gmail.com">sushantsingh76626@gmail.com</a>
        <br />
        <a className="s-dark-text hover" href="tel:+917300677362">+91-7300677362</a>
        <br />
        <br />
        <p style={{color:"purple"}}>Designed & built by Sushant Singh Yadav</p>
    </div>
}