import React from "react";
import "./header.scss";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import { Container } from "react-bootstrap";
function Header() {
  return (
    <div className="Header__main border border-secondary h-10 d-flex justify-content-between">
      <Container className="d-flex justify-content-between">
        <MenuIcon className="header_hambargerIcon" />
        <YouTubeIcon className="youtube-icon" />
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
