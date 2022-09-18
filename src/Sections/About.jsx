export function About() {
  return (
    <div className="about" id="about">
      <h1 className="bright-white">About me</h1>
      <div>
        <div className="s-dark-text">
          <p>
            Hello my name is Sushant, I am MERN stack developer . I was very much
            interested about coding during my graduation but my main coding journey started with Web
            Development bootcamp where I did coding for 1000+ hours. Solved 250+
            DSA problems which improved my problem solving ability and helped me
            to build the concept and my coding skills reached to the next level.
            Then after working on some collaborative projects I aquired some interpersonal skills.
            <br />
           I always try to learn something new and get updated with latest technologies in the market.
            <br />
            Here are a few technologies I’ve been working with recently:
            </p>
            <br />
            <div style={{display:"flex" , marginLeft:"30px" ,gap: "70px"}} className="bright-text">
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
