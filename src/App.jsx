import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiRedux, SiBootstrap, SiLeetcode } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMui, SiPostman, SiMongoose } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";
import "@fortawesome/fontawesome-free/css/all.min.css";
import wanderlustImg from "./assets/wanderlust.png";
import temperatureImg from "./assets/temperature.png";

function App() {
  return (
    <div className='container'>
      {/* ---------- HEADER ---------- */}
      <header className='header'>
        <div className='image'>
          <img src='/WhatsApp Image 2025-08-29 at 14.48.13_e5469840.jpg'></img>
        </div>
        <div className='introduction'>
          <div className='welcome'>
            <p>Welcome to my portfolio</p>
          </div>
            <h1>Hi, I'm Fenil Gadhiya</h1>
            <p className="subtitle">MERN Stack Developer with a strong foundation in Data Structures & Algorithms, passionate about building efficient, real-world web applications.</p>
          <div className='resume'>
            <a className="resume-btn" href="/resume.pdf" download><FaFileDownload /> Download Resume</a>
          </div>
          <div className='links'>
            <a href="https://github.com/Fenil060" target="_blank" ><FaGithub size={30} color="#f8f7f7ff"/></a>
            <a href="https://linkedin.com/in/fenil-gadhiya" target="_blank"><FaLinkedin size={30} color="#0A66C2" /></a>
            <a href="https://leetcode.com/fenilgadhiya" target="_blank"><SiLeetcode size={30} color="#FFA116"/></a>
            <a href="mailto:gadhiyafenil090@gmail.com"><FaEnvelope size={30} color="#EA4335"/></a>
            <br></br>
          </div>
        </div>
      </header>

      {/* ---------- ABOUT ---------- */}
      <section>
        <h2>About Me</h2>
        <p>
          Hi, I’m Fenil Gadhiya, a 6th-semester Computer Engineering student at
          Gujarat Technological University. I have strong foundations in full
          stack development and problem solving. I have experience building MERN
          stack applications, working with REST APIs and databases, and solving
          Data Structures and Algorithms problems on LeetCode.
        </p>
      </section>

      {/* ---------- EDUCATION ---------- */}
      <section>
        <h2 style={{ marginBottom: '20px' }}>Education</h2>

        {/* First Education */}
          <div className="education">
            <div className="icon">
              <i className="fa-solid fa-graduation-cap edu-icon"></i>
            </div>

            <div className="edu-p">
              <div className="edu-header">
                <h3>Bachelor of Engineering in Computer Engineering</h3>
                <span className="edu-date">
                  <i className="fa-regular fa-calendar"></i> 2023 – Present
                </span>
              </div>
              <p className="university">Gujarat Technological University</p>
              <p>CGPA: 7.89 / 10</p>

              <div className="edu-tags">
                <span>Object Oriented Programming</span>
                <span>Database Management</span>
                <span>Computer Network</span>
                <span>Operating System</span>
              </div>
            </div>
          </div>

        {/* Second Education */}
          <div className="education">
            <div className="icon">
              <i className="fa-solid fa-graduation-cap edu-icon"></i>
            </div>

            <div className="edu-p">
              <div className="edu-header">
                <h3>Desai Education – 12th Science </h3>
                <span className="edu-date">
                  <i className="fa-regular fa-calendar"></i> 2021 – 2023
                </span>
              </div>
              <p className="university">
                GSEB – Gujarat Secondary and Higher Secondary Education Board
              </p>
              <p>Percentile-Rank: 82.96</p>

              <div className="edu-tags">
                <span>Physics</span>
                <span>Chemistry</span>
                <span>Mathematics</span>
              </div>
            </div>
          </div>
      </section>



      {/* ---------- SKILLS ---------- */}
      <section>
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-tile" style={{ '--icon-color': '#E34F26' }}><FaHtml5 className="skill-icon"/> <span>HTML</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#1572B6' }}><FaCss3Alt className="skill-icon"/> <span>CSS</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#F7DF1E' }}><FaJs className="skill-icon"/> <span>JavaScript</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#61DAFB' }}><FaReact className="skill-icon"/> <span>React</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#764ABC' }}><SiRedux className="skill-icon"/> <span>Redux</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#339933' }}><FaNodeJs className="skill-icon"/> <span>Node.js</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#290dc9ff' }}><SiExpress className="skill-icon"/> <span>Express</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#47A248' }}><SiMongodb className="skill-icon"/> <span>MongoDB</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#F05032' }}><FaGit className="skill-icon"/> <span>Git</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#ffffffff' }}><FaGithub className="skill-icon"/> <span>GitHub</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#FFA116' }}><SiLeetcode className="skill-icon"/> <span>LeetCode</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#7952B3' }}><SiBootstrap className="skill-icon"/> <span>Bootstrap</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#ba4f08ff' }}><FaJava className="skill-icon" /><span>Java</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#06B6D4' }}><SiTailwindcss className="skill-icon" /><span>Tailwind CSS</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#4479A1' }}><SiMysql className="skill-icon" /><span>SQL</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#007FFF' }}><SiMui className="skill-icon" /><span>Material UI</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#FF6C37' }}><SiPostman className="skill-icon" /><span>RESTful APIs</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#880000' }}><SiMongoose className="skill-icon" /><span>Mongoose</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#A855F7' }}><MdArchitecture className="skill-icon" /><span>MVC Architecture</span></div>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
        <section>
          <h2 style={{ paddingBottom: '20px' }}>Projects</h2>

          <div className="projects" >
            {/* Left: Image */}
            <div className="project-image">
              <img src={wanderlustImg} alt="Wanderlust" />
            </div>

            {/* Right: Details */}
            <div className="project-details">
              <h3>Wanderlust – Travel Application</h3>

              <p>
                Wanderlust is a full-stack travel application that allows users to explore
                destinations, view travel listings, and manage trip-related information
                through a clean and intuitive interface. It supports authentication,
                CRUD operations, and REST API–based communication between frontend
                and backend.
              </p>

              {/* Skills as buttons */}
              <div className="project-skills">
                <span className="skill-btn">HTML</span>
                <span className="skill-btn">CSS</span>
                <span className="skill-btn">JavaScript</span>
                <span className="skill-btn">Node.js</span>
                <span className="skill-btn">Express</span>
                <span className="skill-btn">MongoDB</span>
                <span className="skill-btn">Bootstrap</span>
                <span className="skill-btn">REST APIs</span>
              </div>

              {/* Links */}
              <div className="project-links">
                <a href="https://github.com/Fenil060/Wanderlust" target="_blank" className="project-link-btn">
                  <FaGithub /> GitHub
                </a>
                <a href="https://wanderlust-r0g5.onrender.com" target="_blank" className="project-link-btn">
                  <i className="fa-solid fa-globe"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="projects">
            {/* Left: Image */}
            <div className="project-image">
              <img src={temperatureImg} alt="temperatureImg" />
            </div>

            {/* Right: Details */}
            <div className="project-details">
              <h3>Temperature Converter</h3>

              <p>
                A responsive Temperature Converter web application that allows users to instantly convert values between Celsius, Fahrenheit, and Kelvin. The application includes proper input validation to ensure only numeric values are accepted, preventing incorrect entries. It provides accurate, real-time conversion results with clearly displayed units, enhancing usability. The clean and modern user interface is built using css, ensuring a smooth and responsive experience across all devices.
              </p>

              {/* Skills as buttons */}
              <div className="project-skills">
                <span className="skill-btn">HTML</span>
                <span className="skill-btn">CSS</span>
                <span className="skill-btn">JavaScript</span>
              </div>

              {/* Links */}
              <div className="project-links">
                <a href="https://github.com/Fenil060/Temperature-converter" target="_blank" className="project-link-btn">
                  <FaGithub /> GitHub
                </a>
                <a href="https://temperature-converter-theta-one.vercel.app/" target="_blank" className="project-link-btn">
                  <i className="fa-solid fa-globe"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>


      {/* ---------- LEETCODE STATS ---------- */}
      <section>
        <h2>Problem Solving</h2>

        <div className="projects">
          {/* Left: Difficulty Stats (instead of image) */}
          <div className="problem-visual">
            <div className="difficulty-block easy">
              <span>Easy</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "55%" }}></div>
              </div>
              <small>147 Solved</small>
            </div>

            <div className="difficulty-block medium">
              <span>Medium</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "40%" }}></div>
              </div>
              <small>125 Solved</small>
            </div>

            <div className="difficulty-block hard">
              <span>Hard</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "10%" }}></div>
              </div>
              <small>17 Solved</small>
            </div>
          </div>

          {/* Right: Details */}
          <div className="project-details">
            <h3>LeetCode – Problem Solving & DSA</h3>

            <p>
              Actively practicing data structures and algorithms on LeetCode with a
              strong focus on writing efficient and optimized solutions. Solved
              280+ problems covering a wide range of difficulty levels and core DSA
              topics.
            </p>

            {/* Topics */}
            <div className="project-skills">
              <span className="skill-btn">Arrays</span>
              <span className="skill-btn">Strings</span>
              <span className="skill-btn">HashMap</span>
              <span className="skill-btn">HashSet</span>
              <span className="skill-btn">Backtracking</span>
              <span className="skill-btn">Linked List</span>
              <span className="skill-btn">Stack</span>
              <span className="skill-btn">Queue</span>
              <span className="skill-btn">Binary Search</span>
              <span className="skill-btn">Heaps</span>
              <span className="skill-btn">Greedy</span>
              <span className="skill-btn">Trees</span>
              <span className="skill-btn">BST</span>
              <span className="skill-btn">Graphs</span>
              <span className="skill-btn">DSU</span>
            </div>
          </div>
        </div>
      </section>

      {/*------------------------ connect ----------------*/}
      <section className="lets-connect">
  <h2>Connect with Me</h2>

  <p>
    You can reach out to me through the platforms below. I’m always open to
    discussions, collaborations, and new opportunities.
  </p>

  <div className="connect-links">
    <a href="https://github.com/Fenil060" target="_blank" className="connect-btn github"><FaGithub /> GitHub</a>

    <a
      href="https://linkedin.com/in/fenil-gadhiya"
      target="_blank"
      className="connect-btn linkedin"
    >
      <FaLinkedin /> LinkedIn
    </a>

    <a
      href="mailto:gadhiyafenil090@gmail.com"
      className="connect-btn email"
    >
      <FaEnvelope /> Email
    </a>
  </div>
</section>



      {/* ---------- FOOTER ---------- */}
      <footer>
        <p>© 2025 Fenil Gadhiya</p>
      </footer>
    </div>
  );
}

export default App;
