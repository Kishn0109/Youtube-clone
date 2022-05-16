import React from "react";
import "./sidbar.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HomeIcon from "@material-ui/icons/Home";
import { signOut } from "firebase/auth";
import { auth } from "../../secret";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userauth } from "../../feature/user/userSlice";
function Sidbar({ toggelSidebar, toggelfunction }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.setItem("user-uid", null);
      localStorage.setItem("user-profile", null)
      localStorage.setItem("accessToken", null)
      dispatch(userauth({ type: "LOGOUT" }))
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      onClick={() => toggelfunction()}
      className={toggelSidebar ? "sidbar__main open" : "sidbar__main"}
    >
      <ul className="d-flex flex-column justify-content-center align-items-center">
        <li>
          <HomeIcon />
          <span>Home</span>
        </li>
        <li>
          <SubscriptionsIcon />
          <span>Subscription</span>
        </li>
        <li>
          <ThumbUpAltIcon />
          <span>Liked</span>
        </li>
        <li>
          <HistoryIcon />
          <span>History</span>
        </li>
        <li>
          <VideoLibraryIcon />
          <span>Library</span>
        </li>
        <li>
          <SentimentSatisfiedIcon />
          <span>I do not know</span>
        </li>
        <li onClick={() => logout()}>
          <ExitToAppIcon />
          <span >Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidbar;
