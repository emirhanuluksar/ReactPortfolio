/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ULUARS
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/emirhanuluksar">
          <AiOutlineGithub />
        </a>
        <a href="https://www.linkedin.com/in/emirhanuluksar/">
          <AiOutlineLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ULUARS. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
