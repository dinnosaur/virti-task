import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Video from './video'

function App() {
    let imageCount1 = useRef(0)
    let imageCount2 = useRef(0)
    let imageCount3 = useRef(0)

    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)

    const image1Ref = useRef()
    const image2Ref = useRef()
    const image3Ref = useRef()

    image1Ref.current = image1
    image2Ref.current = image2
    image3Ref.current = image3


    const imageTimings = (timeStamp) => {
      
      addImageStatement(3.50, 8.50, image1Ref, imageCount1, <img id="image1_overlay" src="/images/image1.png" alt="" />, setImage1, 1, timeStamp)
      addImageStatement(6.00, 8.00, image2Ref, imageCount2, <img id="image2_overlay" src="/images/image2.png" alt="" />, setImage2, 2, timeStamp)
      addImageStatement(7.00, 8.50, image3Ref, imageCount3, <img id="image3_overlay" src="/images/image3.png" alt="" />, setImage3, 3, timeStamp)

      removeImageStatement(8.00, image2Ref, imageCount2, setImage2, timeStamp)
      removeImageStatement(8.50, image1Ref, imageCount1, setImage1, timeStamp)

    }

    const addImageStatement = (startTime, endTime, imageRef, showCount, image, setImage, endCount, timeStamp) => {
      if ((timeStamp >= startTime) && (timeStamp < endTime)) {
        
        if (!imageRef.current) {
          
          if (showCount.current < endCount) setImage(image)
        
        }
      }

    }

    const removeImageStatement = (endTime, imageRef, showCount, setImage, timeStamp) => {
      if (timeStamp >= endTime) {
        
        if (imageRef.current) {
          showCount.current++
          setImage(null)
        }

        if (endTime === 8.50)
          if (image3Ref.current) {
            imageCount3.current++
            setImage3(null)
          }
      }
    }



    return (
      <div className="App">
        <header className="App-header">
          <div id="video_box">
            <Video imageTimings={imageTimings} />
           
            {image1}
            {image2}
            {image3}

          </div>
        </header>
      </div>
    );
}

export default App;
