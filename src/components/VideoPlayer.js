import React from 'react';
import ReactPlayer from 'react-player';
import classes from './VideoPlayer.css';

const VideoPlayer =(props) => {
  let videoClass=[classes.Player,props.open ? classes.Player_Open : classes.Player_Closed];
 
  return (
    <ReactPlayer url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls width={'60%'} height={'60%'}  className={videoClass.join(" ")}  />
  );
};

export default VideoPlayer;