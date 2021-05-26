/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/Footer.css'
import { AiFillLinkedin , AiFillGithub} from 'react-icons/ai'
import { MdPhoneAndroid } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import Logo from '../images/logo JSI-2.png'
import { FormattedMessage } from 'react-intl'

const Footer = () => {

    return(
        <div>
            <div className="footer-container">
            <img id="logo-footer" src={Logo}></img>
            <p className="title-footer">© <b>Jona Iasenza: </b><FormattedMessage id="app.footer" defaultMessage="Desarrollador Web, 2021"/></p>
            <p className="parrafos">
            <p className="cel"><MdPhoneAndroid size="1.6em"/> <cel> +54 11 6722 1543 </cel></p>
            <p className="icons"> 
            <AiFillLinkedin id="linkedin" size="1.6em"/> <AiFillGithub id="github" size="1.6em"/> <FaWhatsapp id="whatsapp" size="1.6em"/>
            </p>
            </p>
            </div>
        </div>
    )
}

export default Footer;
