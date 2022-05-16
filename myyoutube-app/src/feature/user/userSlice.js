import { createSlice } from "@reduxjs/toolkit"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SET_PROFILE } from "./authType";

const initialState = {
    loading: false,
    accestoken: (localStorage.getItem("accessToken"))!==null ? localStorage.getItem("accessToken") : null,
    user: JSON.parse(localStorage.getItem("user-profile")) ? localStorage.getItem("user-profile") : null,
    uid: (localStorage.getItem("user-uid")) ? localStorage.getItem("user-uid") : null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userauth: (state, action) => {
            const { type, payload } = action.payload
            console.log(type, payload)
            switch (type) {
                case LOGIN_SUCCESS:
                    // body of case 1
                    // console.log({ ...state, accestoken: payload, loading: false })
                    return { ...state, accestoken: payload, loading: false }


                case LOGIN_FAIL:
                    // body of case 2
                    return { ...state, accestoken: null, loading: false, error: payload }


                case LOGIN_REQUEST:
                    // body of case N
                    return { ...state, loading: true }
                case LOGOUT:
                    // body of case N
                    return { ...state, loading: false, accestoken: null, uid: null, user: null }
                case SET_PROFILE:
                    // body of case N
                    return { ...state, user: payload }

                default:
                // body of default
            }
        }
    }
})
export const { userauth } = userSlice.actions
export default userSlice.reducer