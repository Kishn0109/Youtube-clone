import { homemovieFail, homemovieRequest, homemovieSucess } from "../feature/MoviesList/HomemovieSlice";
// import { homemovieFail } from "../feature/MoviesList/HomemovieSlice";
import { request } from "./request";
import { useDispatch, useSelector } from "react-redux";
export const Allfiveos = async () => {
    const dispath = useDispatch();
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

export const FetchBycategories = async (categories) => {
    const dispath = useDispatch();
    try {
        dispath(homemovieRequest());
        const res = await request('/search', {
            params: {
                part: "snippet",
                maxResults: 20,
                q: categories
            }
        })
        console.log(categories, "res")
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
