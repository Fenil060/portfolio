import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiRedux, SiBootstrap, SiLeetcode } from 'react-icons/si';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import wanderlustImg from './assets/wanderlust.png';

function App() {
  return (
    <div className='container'>
      {/* ---------- HEADER ---------- */}
      <header className='header'>
        <h1>Fenil Gadhiya</h1>
        <p className="subtitle">Engineering Student | MERN Stack Developer | Full Stack Developer</p>
        <div className='links'>
          <a href="https://github.com/Fenil060" target="_blank"><FaGithub size={30} /></a>
          <a href="https://linkedin.com/in/fenil-gadhiya" target="_blank"><FaLinkedin size={30} /></a>
          <a href="https://leetcode.com/fenilgadhiya" target="_blank"><SiLeetcode size={30} /></a>
          <a href="mailto:gadhiyafenil090@gmail.com"><FaEnvelope size={30} /></a>
          <br></br>
        </div>
        <a className="resume-btn" href="/resume.pdf" download><FaFileDownload /> Download Resume</a>
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

      {/* ---------- SKILLS ---------- */}
      <section>
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-tile" style={{ '--icon-color': '#E34F26' }}><FaHtml5 className="skill-icon"/> <span>HTML</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#1572B6' }}><FaCss3Alt className="skill-icon"/> <span>CSS</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#F7DF1E' }}><FaJs className="skill-icon"/> <span>JavaScript</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#61DAFB' }}><FaReact className="skill-icon"/> <span>React</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#764ABC' }}><SiRedux className="skill-icon"/> <span>Redux</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#339933' }}><FaNodeJs className="skill-icon"/> <span>Node.js</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#000000' }}><SiExpress className="skill-icon"/> <span>Express</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#47A248' }}><SiMongodb className="skill-icon"/> <span>MongoDB</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#F05032' }}><FaGit className="skill-icon"/> <span>Git</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#181717' }}><FaGithub className="skill-icon"/> <span>GitHub</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#FFA116' }}><SiLeetcode className="skill-icon"/> <span>LeetCode</span></div>
          <div className="skill-tile" style={{ '--icon-color': '#7952B3' }}><SiBootstrap className="skill-icon"/> <span>Bootstrap</span></div>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section>
        <h2>Projects</h2>
        <div className="projects">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={wanderlustImg} alt="Travel App"/>
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Developed a full-stack travel application inspired by Airbnb, enabling users to explore, filter, and manage destinations including hotels, beaches, resorts, and many more.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/Fenil060/Wanderlust" target="_blank">GitHub</Button>
              <Button size="small" href="https://wanderlust-r0g5.onrender.com" target="_blank">Live Demo</Button>
            </CardActions>
          </Card>
        </div>
      </section>

      {/* ---------- LEETCODE STATS ---------- */}
      <section className="leetcode-section">
        <h2>Problem Solving</h2>
        <p>
          I actively practice competitive programming on LeetCode with a strong focus on data structures, algorithms, and problem-solving consistency.
        </p>
        <h3>Problem Stats From LeetCode</h3>

        <div className="leetcode-stats">
          <div className="stat-card total">
            <p>Total Problems Solved</p>
            <h2>250</h2>
          </div>

          <div className="difficulty-cards">
            <div className="stat-card easy"><p>Easy</p><h2>137</h2></div>
            <div className="stat-card medium"><p>Medium</p><h2>100</h2></div>
            <div className="stat-card hard"><p>Hard</p><h2>13</h2></div>
          </div>

          <div className="stat-card global">
            <p>Contest Rating</p>
            <h2>1427</h2>
          </div>
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
