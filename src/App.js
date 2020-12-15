import './App.css';
import React, { useState, useRef, useEffect } from 'react';
// import video from '../public/Big_Buck_Bunny_1080_10s_5MB.mp4'

function App() {
  let videoRef = useRef(null)
  let timeStamp = 0
  let pause = false
  
  let count = useRef(0)
  let count1 = useRef(0)
  let count2 = useRef(0)

  const [image, setImage] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)

  const imageRef = useRef()
  const image2Ref = useRef()
  const image3Ref = useRef()

  imageRef.current = image
  image2Ref.current = image2
  image3Ref.current = image3
  

  const handlePlaying = () => {
   timeStamp = parseFloat(videoRef.current.currentTime.toFixed(2))
  
    timings()
    
    start()
  }

  function start() {
    if(!pause){
      requestAnimationFrame(handlePlaying)
    }   
  }


  const timings = () =>  {
    addImageStatement(3.50, 8.50, imageRef, count, <img id="image1_overlay" src="/images/image1.png" alt={null} />, setImage )
    addImageStatement(6.00, 8.00, image2Ref, count1, <img id="image2_overlay" src="/images/image2.png" alt={null} />, setImage2)
    addImageStatement(7.00, 8.50, image3Ref, count2, <img id="image3_overlay" src="/images/image3.png" alt={null} />, setImage3)

    removeImageStatement(8.00, image2Ref, count1, setImage2)
    removeImageStatement(8.50, imageRef, count, setImage)
    
  }

  const addImageStatement = (startTime, endTime, imageRef, showCount, image, setImage) => {
   if ((timeStamp >= startTime) && (timeStamp < endTime )) 
    {
      if(!imageRef.current){
         if(showCount.current < 2) setImage(image)
      }
    } 

  }

  const removeImageStatement = (endTime, imageRef, showCount, setImage) => {
    if(timeStamp >= endTime ) 
    {
      if(imageRef.current) {
        showCount.current ++
        setImage(null)
      }   

      if(endTime === 8.50)
        if(image3Ref.current) {
          count2.current ++
          setImage3(null)
        }
    }
  }


  // useEffect(() => {
  // if(imageRef.current === null ) {
  //   count.current ++
  // }

  // if(image2Ref.current === null ) {
  //   count1.current ++
  // }

  //   console.log(count.current)
  //   console.log(count1.current)
  // }, [image,image2,image3]); 


  const handlePause = video => { 
    pause = true
  }

  const handlePlay = video => {
    pause = false 
  }

  const handleEnd = video =>{
    pause = true
  }

  return (
    <div className="App">
      <header className="App-header">
      <div id="video_box">
        <video  width ="700" controls ref={videoRef} onPlaying = {handlePlaying} onPlay={handlePlay} onPause={handlePause} onEnded={handleEnd}>  
          <source src="/Big_Buck_Bunny_1080_10s_5MB.mp4"
            type="video/mp4"/>
        </video>
          {image}
          {image2}
          {image3}
        </div>
      </header>
    </div>
  );
}

export default App;
