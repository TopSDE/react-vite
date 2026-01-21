// ---------------------------------
// **IMP
// VIDEO REFERENCE
// /*

import React, { useRef } from 'react'
import videoUrl from "./video/Video.mp4"

const VideoReference = () => {
    const videoRef = useRef() // obj
    console.log(videoRef);

    let playVideo = () => {
        videoRef.current.play()
    }

    let pauseVideo = () => {
        videoRef.current.pause()
    }

    let loadVideo = () => {
        videoRef.current.load()
    }

    return (
        <>
            <video src={videoUrl} ref={videoRef} height="400px">
            </video>
            <button onClick={playVideo}>PLAY</button>
            <button onClick={pauseVideo}>PAUSE</button>
            <button onClick={loadVideo}>LOAD</button>
        </>
    )
}
export default VideoReference

// */