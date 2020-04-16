import React from 'react';
import classes from './Footer.module.css'
import { Link } from 'react-router-dom';
import LinkedIn from '../../assets/linkedin 1.svg'
import Github from '../../assets/github1.svg'
import Instgram from '../../assets/instagram 1.svg'

const Footer = () => {
    return ( 
        <footer >
            <div className={classes.Footer}>
                <div className={classes.Logo}>
                    <Link to="/home">
                        <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 37L2.34455 9.25002L32.6554 9.25002L17.5 37Z" stroke="#F8C826" strokeWidth="3" strokeLinecap="round" />
                            <path d="M11.1985 24.1498L17.0137 15.3998L24.4985 23.7998" stroke="#F8C826" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </Link>
                </div>
                <div className={classes.FooterPara}>
                    <h1>Thanks for scrolling, <span>that’s all falks.</span></h1>
                </div>
                <div className={classes.FooterIcons}>
                    <div className={classes.Github}>
                        <a href='#fgf'>
                            <img src={Github} alt='Github' />
                        </a>
                    </div>
                    <div className={classes.LinkedIn}>
                        <a href='#fdghfd'>
                            <img src={LinkedIn} alt='LinkedIn' />
                        </a>
                    </div>
                    <div className={classes.Instgram}>
                        <a href='#dfd'>
                            <img src={Instgram} alt='Instagram' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;