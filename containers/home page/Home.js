import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/footer'
import classes from './Home.module.css'
import Instagram from '../../assets/instagram.svg'
import Linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/github.svg'
import rightArrow from '../../assets/rightArrow.svg'

import Introduction from './Introduction/Introduction'
import Contact from './Contact/Contact';
import Box from './Boxes/Boxes';
import Portfolio from './Portfolio/Portfolio'
import Blog from './Blog/Blog'
import ContactForm from './ContactForm/ContactForm'

import computer from '../../assets/ComputerVector.svg';
import BoxVector from '../../assets/BoxVector.svg';

const Home = () => {
    return (
        <> 
        <Navbar />
        <main className={classes.Home}>
            <div className={classes.TitleGrid}>
                
            <div className={classes.Title}>
                <h1>Parag <span>Rudani</span></h1>
            </div>
            
            <div className={classes.Icons}>
                <div className={classes.instagram}>
                    <a href='#insta'>
                        <img src={Instagram} alt='Instagram' />
                    </a>
                </div>
                <div className={classes.linkedin}>
                    <a href='#linkedin'>
                        <img src={Linkedin} alt='LinkedIn' />
                    </a>
                </div>
                <div className={classes.instagram}>
                    <a href='#github'>
                        <img src={Github} alt='github' />
                    </a>
                </div>
            </div>
            </div>

            <div className={classes.IntroductionGrid}>
                <Introduction />
                <div className={classes.Link}>
                    <h3><a href='#sfgg'>My story</a></h3>
                    <img src={rightArrow} alt='arrow'/>
                </div>
            </div>
        </main>
        
            <Contact />
            
            <div className={classes.BoxSection}>
                <Box link={BoxVector} role='UI/UX Designer' />
                <Box link={computer} role='Full Stack Developer' />
            </div>

            <Portfolio rightArrow={rightArrow} />
            
            <Blog rightArrow={rightArrow} />
            
            <ContactForm />

            <Footer />
        </>
     );
}
 
export default Home;
