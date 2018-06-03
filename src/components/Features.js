import React from 'react';
import Back from '../assets/back.jpg';
import classes from './Features.css';
import Aux from '../hoc/Aux';


const Features = (props) =>{

    return  (
        
        <div class="container" className={classes.xyz}>
        <div class="col-md-12 col-xs-12">
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <img src={Back} alt="Image_car" class="img-responsive" className={classes.features_img} onClick={props.open}/>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                <div className={classes.fet}>
                    <h2 className={classes.Content}>Remember Everything</h2>
                    <p>Organize your work and declutter your life.Collect everything at one place and find when you need it.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <img src={Back} alt="Image_car" class="img-responsive" className={classes.features_img} onClick={props.open}/>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                <div className={classes.fet}>
                    <h2 className={classes.Content}>Remember Everything</h2>
                    <p>Organize your work and declutter your life.Collect everything at one place and find when you need it.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Features;