import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

class Navbar extends Component {
    state = {  }
        state =  {
            toggled: false
        }
    
        toggleBar = () => {
            this.setState({toggled: !this.state.toggled})
        }
    
        render() {
            let attachedClasses1 = [classes.line, classes.line1]
            let attachedClasses2 = [classes.line, classes.line2]
            let attachedClasses3 = [classes.line, classes.line3]

            return ( 
                <React.Fragment>
                    <nav>
                        {/* Logo */}
                        <div className={classes.logo}>
                            <Link to="/home">
                            <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 37L2.34455 9.25002L32.6554 9.25002L17.5 37Z" stroke="#F8C826" strokeWidth="3" strokeLinecap="round" />
                                <path d="M11.1985 24.1498L17.0137 15.3998L24.4985 23.7998" stroke="#F8C826" strokeWidth="3" strokeLinecap="round"  />
                            </svg>
                            </Link>
                        </div>
        
                        {/* Burger Menu */}
                        <div className={classes.burger} onClick={this.toggleBar}>
                            <div className={attachedClasses1.join(' ')}></div>
                            <div className={attachedClasses2.join(' ')}></div>
                            <div className={attachedClasses3.join(' ')}></div>
                        </div>
            </nav>
                {/* <Sidebar toggled={this.state.toggled} /> */}
                </React.Fragment>
             );
        }
}
 
export default Navbar;