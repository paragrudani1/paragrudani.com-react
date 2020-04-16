import React from 'react';
import classes from './Portfolio.module.css'
import PortfolioImg1 from '../../../assets/mockup-of-a-woman-writing-on-a-macbook-pro 3.png'
import PortfolioImg2 from '../../../assets/appointment 2.png';

const Portfolio = (props) => {
    
    let HideLink = [classes.ExploreMore, classes.Hide]
    return ( 
        <div className={classes.Portfolio}>
            <div className={classes.Portfolio_header}>
                        <p className={classes.Portfolio_Head}>- Portfolio </p>
                        <h1 className={classes.Portfolio_Title}>
                            Here are some picked projects I’ve done.
                        </h1>
                        <p className={classes.Portfolio_Sub}> 
                        Love experiments and this project is no exception! What do you say?                    
                        </p>

                <div className={classes.ExploreMore}>
                    <h3><a href='#sfgg'>Explore More</a></h3>
                    <img src={props.rightArrow} alt='arrow'/>
                </div>
            </div>

            <div className={classes.Portfolio_Section}>
                <div className={classes.Portfolio_Content}>
                        <div className={classes.Portfolio_img}>
                            <img src={PortfolioImg1} alt='Restaurent Landing Page' />
                        </div>
                        <div className={classes.Portfolio_Detail}>
                            <p>- Design </p>
                            <h1><a href='#sdf'>Restaurent Landing Page Design.</a></h1>
                        </div>
                </div>

                <div className={classes.Portfolio_Content}>
                    <div className={classes.Portfolio_img}>
                        <img src={PortfolioImg2} alt='Hospital Landing Page' />
                    </div>
                    <div className={classes.Portfolio_Detail}>
                        <p>- Design </p>
                        <h1><a href='#sdf'>Hospital Landing Page Design.</a></h1>
                    </div>
                </div>
            </div>

            <div id='explore' className={HideLink.join(' ')}>
                <h3><a href='#sfgg'>Explore More</a></h3>
                <img src={props.rightArrow} alt='arrow'/>
            </div>
        </div>
     );
}   
 
export default Portfolio;