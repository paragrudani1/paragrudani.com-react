import React from 'react';
import classes from './Blog.module.css';

const Blog = (props) => {
    return ( 
        <div className={classes.Blog}>
            <div className={classes.Blog_header}>
                    <p className={classes.Blog_Head}>- Blog </p>
                    <div className={classes.Blog_Title}>
                        <h1>What’s new?</h1> 
                        <h1>My blog and news.</h1>
                    </div>
                    <p className={classes.Blog_Sub}> 
                    Love experiments and this project is no exception! What do you say?                    
                    </p>
            </div>

            <div className={classes.Blog_Detail}>
                <div className={classes.Blog_Name}>
                    <p>March 26, 2020</p>
                    <h1>What is Passion?</h1>
                </div>
                <img src={props.rightArrow} alt='arrow' />
            </div>

            <div className={classes.Blog_Detail}>
                <div className={classes.Blog_Name}>
                    <p>March 26, 2020</p>
                    <h1>What is Passion?</h1>
                </div>
                <img src={props.rightArrow} alt='arrow' />
            </div>
            
            <div className={classes.Blog_Detail}>
                <div className={classes.Blog_Name}>
                    <p>March 26, 2020</p>
                    <h1>What is Passion?</h1>
                </div>
                <img src={props.rightArrow} alt='arrow' />
            </div>
        </div>
     );
}
 
export default Blog;