import React,{Component} from 'react';
import classes from './Navigation.css';
import Down from 'react-icons/lib/fa/angle-down';
import Up from 'react-icons/lib/fa/angle-up';
import Logo from '../assets/logo.jpeg';
class Navigation extends Component{

   
    render(){
        let icon=this.props.showAllServices ? <Up/> : <Down/>

        return(
            <div class="container-fluid">
            <div class="col-md-12 col-xs-12">
                <div class="col-md-6">
                <img src={Logo} alt="Logo" className={classes.Logo}/>   
                </div>
                <div class="col-md-6" className={classes.NavList}>
                <li onClick={this.props.showServices}>All Services {icon}</li>
                <li>Domains</li>
                <li>Tutorials</li>
                 <li>Contacts</li>
                 <li>About</li>
                </div>
            </div>
        </div>
        );
    }
}

export default Navigation;