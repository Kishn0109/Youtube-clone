import React, { useState, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import axios from 'axios';
import "./category.scss"
import { ytkey } from "../../secret"
import { useDispatch } from 'react-redux';
import { Addcategories } from '../../feature/MoviesList/HomemovieSlice';
function Categories() {
  const [categories, setcategories] = useState([]);
  const [currcategory, setcurentcategory] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=AIzaSyDNJC4bj65e_ldBAhqsdmmyK1VkCltxFsY`).then((resposnse) => {
      let Allcategoryobj = {
        etag: "grPOPYEUUZN3ltuDUGEWlrTR90U",
        id: "102929292",
        kind: "youtube#videoCategory",
        snippet: { title: 'All', assignable: true, channelId: 'UCBR8-60-B28hp2BmDPdntcQ' }
      }
      let arr = resposnse["data"]?.["items"]
      arr.unshift(Allcategoryobj)
      // console.log(resposnse["data"]?.["items"].unshift(Allcategoryobj))
      setcategories(arr)
    })
  }, [])//AIzaSyDNJC4bj65e_ldBAhqsdmmyK1VkCltxFsY

  const addCategories = (currcategory) => {
    dispatch(Addcategories({
      categories: currcategory
    }))
    // console.log(currcategory)
  }
  return (
    <div className="Categories" style={{ height: "50px" }}>
      <Scrollbars
        renderTrackHorizontal={({ style, ...props }) => (
          <div className='outer'  {...props} style={{ ...style, width: "100%", bottom: "0", backgroundColor: "transparent" }} />
        )}
        style={{ whiteSpace: "nowrap", paddingTop: "0.5rem" }}
      >
        {
          categories.map((obj) => (
            <span key={obj.id} onClick={() => { setcurentcategory(obj.snippet?.title); addCategories(obj.snippet?.title) }} className={currcategory === obj.snippet?.title && "ActiveSpan"}>
              {obj.snippet?.title}
            </span>
          ))
        }
      </Scrollbars>

    </div>
  )
}

export default Categories