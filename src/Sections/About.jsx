export function About() {
  return (
    <div className="about" id="about">
      <h1 className="bright-white">About me</h1>
      <div>
        <div className="s-dark-text">
          <p>
            A MERN Stack developer having experience of 1200+ hours of coding
            and of solving 250+ DSA problems. Aquired some interpersonal skills
            while working on some collaborative projects at Masai School.
            <br />
            I always try to learn something new and get updated with latest
            technologies in the market.
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <br />
          <div
            style={{ display: "flex", marginLeft: "30px", gap: "70px" }}
            className="bright-text"
          >
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <div>
          <img src="/sushant-pic.jpg" alt="pic" width="100%" />
        </div>
      </div>
    </div>
  );
}
