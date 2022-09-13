import { useState } from "react";
import styles from "./Education.module.css";
export function Education() {
  const [show, setShow] = useState(true);
  return (
    <div id={styles.edu}>
      <h1 className="bright-white">Experience & Education</h1>
      <div>
        <div>
          <div className={styles.head} style={show? {backgroundColor: "#308d77"}: null} onClick={() => setShow(true)}>
            Masai School
          </div>
          <div className={styles.head} style={!show? {backgroundColor: "#308d77"}: null} onClick={() => setShow(false)}>
            B.tech
          </div>
        </div>
        {show ? (
          <div className={styles.desc}>
            <h3>Full Stack Web Development Course</h3>
            <p className="bright-text">March, 2022 - present</p>
            <ul className="s-dark-text">
              <li>1000+ hours of coding</li>
              <li>Data structure and algorithms</li>
              <li>100+ hours of soft skill sessions</li>
            </ul>
          </div>
        ) : (
          <div className={styles.desc}>
           <h3>Bachelor of Technology</h3>
            <p className="bright-text">August, 2017 - September,2021</p>
            <ul className="s-dark-text">
              <li>Rajkiya Engineering College, Bijnor</li>
              <li>Civil Engineering</li>
              <li>CGPA:- <b className="bright-text">7.33</b></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
