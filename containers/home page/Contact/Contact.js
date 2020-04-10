import React from 'react';
import classes from './Contact.module.css'

const Contact = () => {
    return ( 
        <section className={classes.contactSection}>
                <div className={classes.contactSection_title}>
                    <h1>
                        Every great design begins with an even better story.
                    </h1>

                    <p>
                        With an eye on what’s important I create User centered Design for Websites, Apps and other visual places to work with.
                    </p>
                </div>

                <div className={classes.Stats}>
                    <div className={classes.StatsSection}>
                    <h1 className={classes.number}>
                        2 
                    </h1>
                        <p>Years of Experience.</p>
                    </div>

                    <div className={classes.StatsSection}>
                    <h1 className={classes.number}>
                        17 
                    </h1>
                        <p>Years Old.</p>
                    </div>
                </div>

                <div className={classes.Contact}>
                    <p className={classes.Contact_Head}>- Contact </p>
                    <h1 className={classes.Contact_Title}>
                        Any type of query & Discussion.
                    </h1>
                    <p className={classes.Contact_Sub}> 
                        Heyy wasup? Do you want to talk or just send me an idea over for a project you have in mind?
                    </p>

                    <div className={classes.Contact_Email}>
                        <a href="mailto:mail@paragrudani.com?subject= Mail for Parag Rudani">mail@paragrudani.com</a>
                    </div>
                </div>
        </section>
     );
}
 
export default Contact;