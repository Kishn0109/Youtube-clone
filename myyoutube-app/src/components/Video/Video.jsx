import React from 'react'
import "./Video.scss"
function Video() {
  return (
    <div className="video" style={{ color: "black" }}>
      <div className="video_thambnil" >
        <img src="https://i.ytimg.com/vi/sZjlEKbaykc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdDqtfijfiIlHDmw2F_ckUSRYgXA"
          alt="" />
      </div>
      <div className="body d-flex">
        <div className="channelicon">
          <img className="channellog" src="https://i.ytimg.com/vi/sZjlEKbaykc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdDqtfijfiIlHDmw2F_ckUSRYgXA"
            alt="" />
        </div>
        <div className="videoinfo">
          <div className="video_title">
            <b > How to be a Succesfull person in life</b>
          </div>
          <div className="channel whiteSmoke">
            <span className='channel_Name'>The viy King</span>
          </div>
          <div className="video_views whiteSmoke">
            <span className="views ">12M views </span>{"."}
            <span className="views_time"> 6 days ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video