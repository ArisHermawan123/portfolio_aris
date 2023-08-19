import { FaGithub, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ARIS HERMAWAN
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
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <Link to="https://github.com/ArisHermawan123" target="_blank">
          <FaGithub />
        </Link>
        <Link to="http://instagram.com/ariis2908" target="_blank">
          <FaInstagram />
        </Link>
        <Link to="#" target="_blank">
          <BsLinkedin />
        </Link>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aris Hermawan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
