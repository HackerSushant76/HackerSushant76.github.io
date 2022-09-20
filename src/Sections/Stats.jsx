import styles from "./Stats.module.css";
import GitHubCalendar from "react-github-calendar"
export function Stats() {
  return (
    <div className={styles.stats}>
        <h2>Github Contribution Calendar</h2>
        <br />
        <br />
        {/* <div><img src="github-calendar.png" alt="" /></div> */}
        <div ><GitHubCalendar responsive="true" username="HackerSushant76"/></div>
    </div>
  );
}
