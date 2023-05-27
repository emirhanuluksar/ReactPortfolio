import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/pngegg.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Emirhan Uluksar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scrool Down
        </a>
      </div>
    </header>
  );
};

export default Header;
