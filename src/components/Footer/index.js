import React from "react";
import { FaGithub, FaFacebook, FaLinkedin  } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://github.com/cameronwein">
                <FaGithub size="25px" className="footer-icon"/>
            </a>
            <a href="https://www.facebook.com/cameron.wein">
                <FaFacebook size="25px" className="footer-icon"/>
            </a>
            <a href="/">
                <FaLinkedin size="25px" className="footer-icon"/>
            </a>
            <a href="/">
                <SiHeroku size="25px" className="footer-icon"/>
            </a>
        </footer>
    )
}

export default Footer;