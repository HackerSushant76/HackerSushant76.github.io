import styles from "./Stats.module.css";
import GitHubCalendar from "react-github-calendar"
export function Stats() {
  return (
    <div className={styles.stats}>
      <h2>Statistics</h2>
      <br />
       <div className={styles.actstats}>
       <div><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=hackersushant76&show_icons=true&locale=en&layout=compact" alt="hackersushant76" /></div>
        <div>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=hackersushant76&show_icons=true&locale=en" alt="hackersushant76"/></div>
        <div><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=hackersushant76&" alt="hackersushant76" /></div>
       </div>
       <br />
       <br />
       <br />
        <h2>Github Contribution Calendar</h2>
        <br />
        <br />
        {/* <div><img src="github-calendar.png" alt="" /></div> */}
       
        <div ><GitHubCalendar responsive="true" username="HackerSushant76"/></div>
    </div>
  );
}
