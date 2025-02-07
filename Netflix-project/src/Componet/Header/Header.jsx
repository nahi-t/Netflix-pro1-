import React from 'react'
import"./header.css"
import image from"../../assets/image/tran1.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function Header() {
  return (
    <div className='header-outer'>
      <div className='header-component'>
        <div className='header-left'>
          <ul>
            <li><img src={ image } alt="Netflix logo" width="100px" /></li>
            <li>Home</li>
            <li>Tvshow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MY listes</li>
            <li>Brows by Language</li>
          </ul>

        </div>

      </div>
      <div className='header-right'>
        <ul>
          <li><SearchIcon/></li>
          <li><NotificationsIcon/></li>
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownCircleIcon/></li>
        </ul>

      </div>
    </div>
  )
}

