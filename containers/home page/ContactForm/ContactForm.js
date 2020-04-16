import React from 'react';
import classes from './ContactForm.module.css';

const ContactForm = () => {
    return ( 
        <div className={classes.ContactSection}>
            <div className={classes.ContactInfo}>
                <div className={classes.Contact}>
                        <div className={classes.Contact_Title}>
                            <h1>Got a Project?</h1>
                            <h1>Let’s Talk.</h1>
                        </div>
                        <p className={classes.Contact_Sub}> 
                        I’m here to help and answer any question you might have. I’m  looking forward to here to heaer from you.
                        </p>
                </div>

                <div className={classes.Contact_Email}>
                    <a href="mailto:mail@paragrudani.com?subject= Mail for Parag Rudani">mail@paragrudani.com</a>
                </div>
            </div>

        <div className={classes.ContactForm}>
                <form>
                    <div className={classes.InputName}>
                        <label htmlFor="Name">What’s your name?</label>
                        <input type="text" name='Name' placeholder='John Doe' required />
                    </div>

                    <div className={classes.InputEmail}>
                        <label htmlFor="Email">Your fancy Email</label>
                        <input type="email" name='Email' placeholder='name@mail.com' required />
                    </div>

                    <div className={classes.InputMassage}>
                        <label htmlFor="Massage">Tell me about your project</label>
                        <textarea cols="25" rows="7" placeholder='Your Massage' required ></textarea>
                    </div>
                    
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>

     );
}
 
export default ContactForm;