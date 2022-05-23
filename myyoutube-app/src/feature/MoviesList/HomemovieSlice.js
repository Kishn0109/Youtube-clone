import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    videos: [],
    nextpagetoken: null,
    categories: "All"
}

const HomeMoviesSlice = createSlice({
    name: "HomeMovies",
    initialState,
    reducers: {
        homemovieRequest: (state) => {
            return { ...state, loading: true }
        },
        homemovieSucess: (state, action) => {
            console.log(action, state.videos.length, "action success")
            return { ...state, loading: false, videos: [...state.videos, ...action.payload.videos], nextpagetoken: action.payload.nextpagetoken }
        },
        homemovieFail: (state, action) => {
            return { ...state, error: action.payload, loading: false }
        },
        Addcategories: (state, action) => {
            console.log(action)
            return { ...state, loading: false, ...action.payload }
        },
    }
})
export const { homemovieRequest, homemovieSucess, homemovieFail, Addcategories } = HomeMoviesSlice.actions
export default HomeMoviesSlice.reducer
