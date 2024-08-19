import React from 'react'
import "./header.css"
// import NetflixLogo from "../../assets/images/Netflix_Logo_PMS.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              {/* <li><img src={NetflixLogo} alt='Netfix Logo'/></li> */}
              <li>Netflix</li>
              <li>Home</li>
              <li>TvShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse By Language</li>
            </ul>
          </div>
          <div className='header_right'>
            <ul>
                <li><SearchIcon/></li>
                <li><NotificationsNoneIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/></li>
            </ul>

        </div>
        </div>
      </div>
   
  );
}

export default Header
