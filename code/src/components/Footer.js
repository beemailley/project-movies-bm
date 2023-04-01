import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <a href="https://www.linkedin.com/in/bridget-mailley/"><FontAwesomeIcon icon={faLinkedin} className="contact-logo" alt="link to LinkedIn" /></a>
        <a href="https://bridgetmailley.com/"><img src="/assets/bridget.jpg" className="contact-logo" alt="link to Bridget's portfolio" /></a>
        <a href="https://github.com/beemailley"><FontAwesomeIcon icon={faGithub} className="contact-logo" alt="link to GitHub" /></a>
      </div>
      <div className="about-me">
        <p>Designed by Bridget Mailley. Technigo Web Development Bootcamp 2023.</p>
        <p>Data and images from <a href="https://www.themoviedb.org/">The Movie Database</a></p>
      </div>
    </footer>
  )
}

export default Footer