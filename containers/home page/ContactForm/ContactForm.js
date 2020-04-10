import React from 'react';
import classes from './ContactForm.module.css';

const ContactForm = () => {
    return ( 
        <div className={classes.ContactForm}>
            <div className={classes.Contact}>
                    <h1 className={classes.Contact_Title}>
                    Got a Project?
                    Let’s Talk.
                    </h1>
                    <p className={classes.Contact_Sub}> 
                    I’m here to help and answer any question you might have. I’m  looking forward to here to heaer from you.
                    </p>
            </div>

            <div className={classes.Contact_Email}>
                <a href="mailto:mail@paragrudani.com?subject= Mail for Parag Rudani">mail@paragrudani.com</a>
            </div>
        </div>
     );
}
 
export default ContactForm;