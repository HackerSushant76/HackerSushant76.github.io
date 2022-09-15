import styles from "./Skills.module.css";
export function Skills() {
  return (
    <div className={styles.skills}>
      <h1>Skills</h1>
      <div>
        <div>Data Structure and Algorithms</div>
        <div>Frontend Development</div>
      </div>
      <div>
        <div>Backend Development</div>
        <div>Communication Skills</div>
      </div>
    </div>
  );
}
