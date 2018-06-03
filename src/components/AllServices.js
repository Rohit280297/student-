import React from 'react';
import classes from './AllServices.css';
import Cross from 'react-icons/lib/fa/close';
const Services = (props) =>{
    return (
        <div className={classes.Details}>
        <span className={classes.Close} onClick={props.closeDetails}>{<Cross/>}</span>
        <div class="container" >
        <div class="col-md-12 col-xs-12">
        
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="col-md-6 col-sm-6 col-xs-12">
                <div className={classes.NavContent}>
                    <h2 className={classes.Title}>Remember Everything</h2>
                    <p className={classes.Content}>Organize your work and declutter your life.Collect everything at one place and find when you need it.</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                <div className={classes.NavContent}>
                    <h2 className={classes.Title}>Remember Everything</h2>
                    <p className={classes.Content}>Organize your work and declutter your life.Collect everything at one place and find when you need it.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="col-md-6 col-sm-6 col-xs-12">
                <div className={classes.NavContent}>
                    <h2 className={classes.Title}>Remember Everything</h2>
                    <p className={classes.Content}>Organize your work and declutter your life.Collect everything at one place and find when you need it.</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                <div className={classes.NavContent}>
                    <h2 className={classes.Title}>Remember Everything</h2>
                    <p className={classes.Content}>Organize your work and declutter your life.Collect everything at one place and find when you need it.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
    );
}

export default Services;