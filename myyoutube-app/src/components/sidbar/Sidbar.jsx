import React from "react";
import "./sidbar.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HomeIcon from "@material-ui/icons/Home";

function Sidbar({ toggelSidebar, toggelfunction }) {
  return (
    <div
      onClick={()=>toggelfunction()}
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
        <li>
          <ExitToAppIcon />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidbar;
