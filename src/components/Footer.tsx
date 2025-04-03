import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ds-u-display--flex ds-u-justify-content--center main-div">
        <a href="#" className="custom-text">Home</a>
        <span className="text-gray">|</span>
        <a href="#" className="custom-text">Privacy Policy</a>
        <span className="text-gray">|</span>
        <a href="#" className="custom-text">Security Policy</a>
      </div>
      <div className="ds-u-text-align--center custom-style">
        Form Approved OMB No. 0938-0948
      </div>
    </footer>
  );
};

export default Footer; 