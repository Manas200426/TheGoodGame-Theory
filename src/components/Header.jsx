import React from 'react'
import'./Header.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
function Header() {
  return (
    <div className='header'>
       
        <div className="header__left">
            <img src="logo1.png" alt="logo" />
            <div className="header__search">
              <SearchRoundedIcon/>
              <input type="text" />
            </div>
        </div>


        <div className="header__right">
         <HeaderOption Icon={HomeIcon} title="Home"/>
         <HeaderOption Icon={SupervisorAccountIcon} title="Network"/>
        </div>
    </div>
  )
}

export default Header