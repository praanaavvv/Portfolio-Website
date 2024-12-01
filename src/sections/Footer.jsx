
import {useState} from 'react';
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="socialIcons">
            <a
              href="https://x.com/devnotpranav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="socialsLogo/x.png" alt="X Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-agarwal-502461274/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="socialsLogo/linkedin.png" alt="LinkedIn Logo" />
            </a>
            <a
              href="https://github.com/praanaavvv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="socialsLogo/github.png" alt="GitHub Logo" />
            </a>
            <a
              href="https://t.me/Pranav21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="socialsLogo/tg.png" alt="Telegram Logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
