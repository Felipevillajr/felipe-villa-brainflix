import React from 'react'
import Logo from '../assets/Logo/Logo-brainflix.svg'

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img id="logo" src={Logo} alt="BrainFlix Logo"/>
            </div>
            <div className="header__searchbar">
                <input id="searchBar" type="text" placeholder="Search"/>
                <div id="searchIcon" ></div>
            </div> 
            <div className="header__upload--btn">
                <button id='upload--btn' type="button" name="button">UPLOAD</button>
                <div id="uploadBtnIcon"></div>
            </div>
            <div className="header__user--img">
            </div>
        </div>
    )
}

export default Header
