import './App.css';
import React, { useState, useRef } from 'react';
// import video from '../public/Big_Buck_Bunny_1080_10s_5MB.mp4'

function App() {
  let timeStamp = 0
  let videoRef = useRef(null)

  const handlePlaying = video => {
    if (video !== null) {
      
      console.log(video)
    }
    
    requestAnimationFrame(handlePlaying)
  }


  const handlePause = video => {
      
  }

  const handleFinish = video =>{
    
  }

  const handleRewind = video => {

  }

  const handleVideoMounted = video => {
    if (video !== null) {
      video.currentTime = 5;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       
        
        <video width = "700" controls ref={handleVideoMounted} onPlaying = {handlePlaying}>

          <source src="/Big_Buck_Bunny_1080_10s_5MB.mp4"
            type="video/mp4"/>

        </video>

      </header>
    </div>
  );
}

export default App;
