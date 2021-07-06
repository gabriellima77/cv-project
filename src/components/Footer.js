import React from 'react';
import '../styles/footerStyles.css';
import githubLight from '../GitHub-Mark-Light-64px.png';
import githubDark from '../GitHub-Mark-64px.png';

const Footer = ({ isDark })=> {
  return(
    <footer className="footer">
      <p>Made by Gabriel Lima</p>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/gabriellima77/cv-project"
      >
        <img
          alt="github logo"
          src={(isDark)? githubDark: githubLight}
          className="logo-github"
        />
      </a>
    </footer>
  );
}

export default Footer;