/* eslint-disable jsx-a11y/img-redundant-alt */
import "./about.css";
import AboutImage from "../../assets/header.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>180+ Completed</small>
            </article>
          </div>
          <p>
            Hello! I'm Emirhan Uluksar, a passionate software developer with
            expertise in front-end and back-end development. I have a strong
            background in creating cutting-edge applications and solutions. My
            skills include JavaScript, .NET Core, C++, and popular frameworks
            like React, Node.js, and Angular. I have a track record of
            delivering robust and efficient solutions tailored to the unique
            needs of each project. Collaboration and effective communication are
            essential to me, and I thrive in agile environments. Please explore
            my portfolio to see examples of my problem-solving skills and
            high-quality code. Thank you for considering my expertise, and I
            look forward to the opportunity to contribute to your organization.
            Feel free to contact me through the information provided on my
            website. Best regards, Emirhan Uluksar.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
