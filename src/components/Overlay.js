import React from 'react';
import Cross from 'react-icons/lib/fa/close';
import classes from './Overlay.css';

const Overlay =(props)=>{
    return(
        <div className={classes.Overlay}>
            <span onClick={props.close} className={classes.Close}><Cross/></span>
        </div>
    );
}

export default Overlay;