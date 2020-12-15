// import './App.css';
import React, {useRef} from 'react';


function Video(props) {
    let videoRef = useRef(null)
    let timeStamp = 0
    let pause = false


    const handlePlaying = () => {
        //asssigns the current time from the video element
        timeStamp = parseFloat(videoRef.current.currentTime.toFixed(2))

        props.imageTimings(timeStamp)

        startLoop()
    }

    function startLoop() {
        if (!pause) {
            requestAnimationFrame(handlePlaying)
        }
    }

    const handlePause = video => {
        pause = true
    }

    const handlePlay = video => {
        pause = false
    }

    const handleEnd = video => {
        pause = true
    }


    return (
        <video width="700" controls ref={videoRef} onPlaying={handlePlaying} onPlay={handlePlay} onPause={handlePause} onEnded={handleEnd}>
            <source src="/Big_Buck_Bunny_1080_10s_5MB.mp4"
                type="video/mp4" />
        </video>
    );
}

export default Video;