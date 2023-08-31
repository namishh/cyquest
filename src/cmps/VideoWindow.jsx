import React from 'react'
import ReactPlayer from 'react-player'


const VideoWindow = ({ vid, w, h }) => {
  return <div className="video">
    <ReactPlayer
      className='react-player fixed-bottom'
      url={`${vid}`}
      width={`${w}px`}
      height={`${h}px`}
      controls={true}
    />
  </div>
}

export default VideoWindow
