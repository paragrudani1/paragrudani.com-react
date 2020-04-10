import React from 'react';
import classes from './Introduction.module.css'

const Introduction = () => {
    return ( 
        <div className={classes.Introduction}>
            <p className={classes.headline}>- Introduction </p>
            <h1>
                Web Designer and Developer, based in India.
            </h1>
            <p className={classes.subIntro}> 
            A creative young man from Gujarat, India who loves designing, coding and capturing some awesome moments
            </p>
        </div>
     );
}
 
export default Introduction;