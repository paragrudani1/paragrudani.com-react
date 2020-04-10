import React from 'react';
import classes from './Boxes.module.css'

const Box = (props) => {
    return ( 
        <div className={classes.Box}>
            <div className={classes.Box_Content}>
            <img src={props.link} alt='Skills' />
            <h1 className={classes.role}>{props.role}</h1>
            </div>
        </div>
     );
}
 
export default Box;