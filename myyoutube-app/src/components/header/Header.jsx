import React from "react";
import "./header.scss";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import { Container } from "react-bootstrap";
function Header({ toggelfunction }) {
  return (
    <div className="Header__main bg-white border border-secondary h-10 d-flex justify-content-between">
      <Container className="d-flex justify-content-between">
        <span className="header_hambargerIcon" onClick={() => {
          console.log("click to hua ")
          toggelfunction()
        }}>
          <MenuIcon className="header_hambargerIcon" />
        </span>

        {/* <YouTubeIcon className="youtube-icon" /> */}
        <img
          className="Youtubelogo"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png"
          alt="youtubeLogo"
        />
        <form>
          <input type="text" placeholder="search" />
          <button>
            <SearchIcon />
          </button>
        </form>
        <div className="Header__left">
          <NotificationsIcon />
          <AppsIcon />
          <img
            src="https://i0.wp.com/shsdelft.nl/wp-content/uploads/2020/09/cropped-IMG_8890-website-1.jpg?resize=1536%2C1536&ssl=1"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}

export default Header;
