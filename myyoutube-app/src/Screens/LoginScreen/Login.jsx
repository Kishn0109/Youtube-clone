import React, { useEffect } from 'react'
import "./login.scss"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../secret';
import { userauth } from '../../feature/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SET_PROFILE } from '../../feature/user/authType';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const provider = new GoogleAuthProvider().addScope("https://www.googleapis.com/auth/youtube.force-ssl")
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handellogin = async () => {
        try {
            dispatch(userauth({ type: LOGIN_REQUEST }))
            const Credential = await signInWithPopup(auth, provider);
            const accessToken = Credential.user.accessToken
            // console.log(JSON.parse(JSON.stringify(Credential)))
            dispatch(userauth({ type: "LOGIN_SUCCESS", payload: accessToken }))
            let profile = {
                userImg: Credential.user.photoURL,
                name: Credential.user.displayName
            }
            localStorage.setItem("user-uid", Credential.user.uid);
            localStorage.setItem("user-profile", JSON.stringify(profile))
            localStorage.setItem("accessToken", accessToken)
            dispatch(userauth({ type: SET_PROFILE, payload: profile }))
        } catch (error) {
            dispatch(userauth({ type: LOGIN_FAIL, payload: error }))
        }

    }
    useEffect(() => {
        user.accestoken !== null || user.accestoken !== 'null' && navigate("/")
    }, [user.accestoken]);
    return (
        <div className='login-container d-flex justify-content-center align-items-center'>

            <div className="login_main">
                <div className="login_logo">
                    <img
                        className="Youtubelogo"
                        src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png"
                        alt="youtubeLogo"
                    />
                </div>
                <div className="login_btn w-100 d-flex justify-content-center">
                    <button type='click' onClick={handellogin}>Google</button>
                </div>
                <div className="login_pera d-flex justify-content-center w-100">
                    <p>A clone of youtube made by Kishan</p>
                </div>
            </div>
        </div>
    )
}
