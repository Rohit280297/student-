import React from 'react';
import classes from './Testimony.css';
import Right from 'react-icons/lib/fa/angle-right';
import Left from 'react-icons/lib/fa/angle-left';
import Profile from '../assets/profile.png';


class Testimony extends React.Component{

    state = {
        current:0,
    }


    changeTextLeft=()=>{
        let length=Object.keys(this.props.testimonials).length;
        let current=this.state.current;
        current=(length-1)-current%length;
        this.setState({current});
    
   }

   changeTextRight=()=>{
        let length=Object.keys(this.props.testimonials).length;
        let current=this.state.current;
        current=(current+1)%length;
        this.setState({current});     
    }


    render(){
    let name = Object.keys(this.props.testimonials)[this.state.current] || '';
     
    return (
        
        <div className={classes.Testimony}>
           <img src ={Profile} className={classes.Profile} alt="profile_pic"/>  
            <p className={classes.Name}>{
                (Object.keys(this.props.testimonials)[this.state.current] || '') +
                 (name ? (this.props.testimonials[name.toString()]["isContributor"] ? ": Contributor": ''): '')
            }
            </p>
            <p className={classes.Message}>{                
               name ? this.props.testimonials[name.toString()]["message"] : ''
            }
            </p>
            <span onClick={this.changeTextLeft} className={classes.Left}>{<Left/>}</span>
            <span onClick={this.changeTextRight} className={classes.Right} >{<Right/>}</span>
            <button className={classes.JoinUs}>Join Us</button>
        </div>
    );
}
}

export default Testimony;