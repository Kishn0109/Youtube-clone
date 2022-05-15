import React, { useState, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import axios from 'axios';
import "./category.scss"
function Categories() {
  const [categories, setcategories] = useState([]);
  const [currcategory, setcurentcategory] = useState("All");
  useEffect(() => {
    axios.get("https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=AIzaSyAzEgB0GDX2bcSZ9gahsSEwRUO5EmZSfVE").then((resposnse) => {
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
  }, [])


  return (
    <div onClick={() => console.log(categories)} className="Categories" style={{ height: "50px" }}>
      <Scrollbars
        renderTrackHorizontal={({ style, ...props }) => (
          <div {...props} style={{ ...style, backgroundColor: "blue", width: "100%", bottom: "0" }} />
        )}
        style={{ whiteSpace: "nowrap", paddingTop: "0.5rem" }}
      >
        {
          categories.map((obj) => (
            <span key={obj.id} onClick={() => setcurentcategory(obj.snippet?.title)} className={currcategory === obj.snippet?.title && "ActiveSpan"}>
              {obj.snippet?.title}
            </span>
          ))
        }
      </Scrollbars>

    </div>
  )
}

export default Categories