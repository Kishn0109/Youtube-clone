import React, { useEffect, useState } from 'react'
import { request } from '../../Action/request';
import moment from 'moment';
import "./Video.scss"
import numeral from 'numeral';
function Video({ id, thumbnailurl, title, channelTitle, publishedAt, channelId }) {
  const [Channelurl, setChannelurl] = useState(null);
  const [Sduration, setduration] = useState(null);
  const [sviews, setviews] = useState(0);
  const _vid = id?.videoId || id;
  // const seconds=moment.
  const seconds = moment.duration(Sduration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss")
  useEffect(() => {
    const videodetails = async () => {
      try {
        const { data: { items } } = await request('/videos', {
          params: {
            part: "contentDetails,statistics",
            id: _vid,
          }
        })
        const { contentDetails: { duration }, statistics: { viewCount } } = items[0];
        // console.log(items[0]);
        setduration(duration);
        setviews(viewCount);
      } catch (error) {
        console.log(error);
      }

    }
    videodetails()
  }, [_vid]);
  useEffect(() => {
    const channel_details = async () => {
      try {
        const { data: { items } } = await request('/channels', {
          params: {
            part: "snippet",
            id: channelId,
          }
        })
        const { snippet: { thumbnails: { medium } } } = items[0];
        setChannelurl(medium.url)
      } catch (error) {
        console.log(error);
      }

    }
    channel_details()
  }, [channelId]);


  return (
    <div className="video" style={{ color: "black" }}>
      <div className="video_thambnil" >
        <img src={thumbnailurl}
          alt="" />
        <span className='absolute' >{_duration}</span>
      </div>
      <div className="body d-flex">
        <div className="channelicon">
          <img className="channellog" src={Channelurl}
            alt="" />
        </div>
        <div className="videoinfo">
          <div className="video_title">
            <b >{title}</b>
          </div>
          <div className="channel whiteSmoke">
            <span className='channel_Name'>{channelTitle}</span>
          </div>
          <div className="video_views whiteSmoke">
            <span className="views ">{numeral(sviews).format("0.a")} views</span>{"."}
            <span className="views_time"> {moment(publishedAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
