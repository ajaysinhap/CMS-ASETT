import { Button } from "@cmsgov/design-system";
import "../styles/Header.css"; 

const Header = () => {
  return (
    <header className="navbar">
      <div className="custom-container">
        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center">
          <div className="ds-u-display--flex ds-u-align-items--center">
            <img src="/cms-logo2.png" alt="CMS Logo" className="custom-image" />
          </div>
          <nav className="custom-hidden custom-flex-container">
            <a className="ds-u-color--white custom-button">Home</a>
            <a className="ds-u-color--white custom-button">About ASETT</a>
            <a className="ds-u-color--white custom-button">Contact Us</a>
            <a className="ds-u-color--white custom-button">Support</a>
          </nav>
          <div className="ds-u-display--flex buttons">
            <Button type="button" className="register-button">Register</Button>
            <Button type="button" className="login-button">Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
