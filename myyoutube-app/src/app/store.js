import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import userReducer from "../feature/user/userSlice"
import HomeMoviesREduser from "../feature/MoviesList/HomemovieSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        Homemovie:HomeMoviesREduser
    }
})