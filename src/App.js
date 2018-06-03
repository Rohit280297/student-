import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './components/Navigation';
import Services from './components/AllServices';
import Testimony from './components/Testimony';
import Back from './assets/back.jpg';
import Features from './components/Features';
import Overlay from './components/Overlay';
import VideoPlayer from './components/VideoPlayer';

class App extends Component {
  state={
    showAllServices:false,
    testimonials:'',
    features:["Get Instant Jobs","Grow by Contributing","Share your knowledge","Hone your skills"],
    showOverlay:false
}

componentWillMount(){
  
  let url ="https://studentplusplus.com/testimony.json";
  fetch(url)
    .then(response => response.json())
    .then(testimonials => {
      this.setState({testimonials});
    })

    
}

toggleOpenDetailsHandler = () =>{
    let status= this.state.showAllServices;
    this.setState({showAllServices:!status});
}

openOverlayHandler = () =>{
  this.setState({showOverlay:true},()=>console.log(this.state.showOverlay));
}

closeOverlayHandler = () =>{
  this.setState({showOverlay:false},()=>console.log(this.state.showOverlay));
}


  render() {

    let services =(this.state.showAllServices) ? <Services closeDetails={this.toggleOpenDetailsHandler}/> : null 
    let overlay= (this.state.showOverlay ? <Overlay close={this.closeOverlayHandler}/>: null);
    return (
      <div className={classes.App}>
      <Navigation showAllServices={this.state.showAllServices} showServices={this.toggleOpenDetailsHandler}/>
      {services}
      <Testimony testimonials={this.state.testimonials}/> 
      <img src={Back} alt="background"  className={classes.Image}/>
     <Features features={this.state.features} open={this.openOverlayHandler}/> 
     {overlay}
     <VideoPlayer open={this.state.showOverlay}/>
     
      </div>
    );
  }
}

export default App;
