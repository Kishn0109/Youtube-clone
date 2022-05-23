import React, { useEffect, useState } from "react";
import "./base.scss"
import "./HomeScreeen.scss"
import Categories from "../../components/category/Categories";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/Video/Video";
import { request } from "../../Action/request";
import { useDispatch, useSelector } from "react-redux";
import { homemovieFail, homemovieRequest, homemovieSucess } from "../../feature/MoviesList/HomemovieSlice";
import moment from "moment"
import { Allfiveos } from "../../Action/FetchMovie";
import InfiniteScroll from "react-infinite-scroll-component";
function HomeScreen() {
  const dispath = useDispatch();
  const Homevideos = useSelector(state => state.Homemovie);
  const { categories } = Homevideos;
  useEffect(() => {
    if (categories === "All") {
      Allfiveos();
    } else {
      FetchBycategories(categories);
    }
  }, [dispath, categories]);
  let Allfiveos = async () => {
    try {
      dispath(homemovieRequest());
      const res = await request('/videos', {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "US",
          maxResults: 20,
        }
      })
      console.log("All is calling", "res")
      let moviedate = {
        videos: res.data.items,
        nextpagetoken: res.data.nextPageToken,
      }
      dispath(homemovieSucess(moviedate));
    } catch (error) {
      dispath(homemovieFail(error));
      console.log(error)
    }
  }
  let FetchBycategories = async (categories) => {
    try {
      dispath(homemovieRequest());
      const res = await request('/search', {
        params: {
          part: "snippet",
          maxResults: 20,
          q: categories
        }
      })
      console.log("search", "res")
      let moviedate = {
        videos: res.data.items,
        nextpagetoken: res.data.nextPageToken,
      }
      dispath(homemovieSucess(moviedate));
    } catch (error) {
      dispath(homemovieFail(error));
      console.log(error)
    }
  }
  const fetchdata = () => {
    if (categories === "All") {
      console.log(Homevideos.videos.length)
      Allfiveos();
    } else {
      FetchBycategories(categories);
    }
  }
  return (
    <Container>
      <Categories />
      <InfiniteScroll
        dataLength={Homevideos.videos.length}
        next={fetchdata}
        hasMore={true}
        loader={(
          <div className="spinner-border text-danger d-block max-auto"></div>
        )}
        className="row"
      >

        {Homevideos.videos.map((video_res, idx) => (
          < Col lg={3} md={4} id={idx} className="column" >
            <Video id={video_res.id} thumbnailurl={video_res.snippet.thumbnails.medium.url} channelId={video_res.snippet.channelId} title={video_res.snippet.title} channelTitle={video_res.snippet.channelTitle} publishedAt={video_res.snippet.publishedAt} />
          </Col>
        ))}
      </InfiniteScroll>
    </Container>);
}

export default HomeScreen;
