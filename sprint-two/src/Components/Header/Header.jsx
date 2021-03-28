import React from 'react'
import Logo from '../../assets/Logo/Logo-brainflix.svg'
import './Header.scss'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/"><div className="header__logo">
                <img id="logo" src={Logo} alt="BrainFlix Logo"/></div></Link>
            <div className="header__searchbar">
                <div id="searchIcon" ></div>
                <input id="searchBar" type="text" placeholder="Search" />
            </div> 
            <div className="header__upload--btn">
                <Link to="/upload"><button id='upload--btn' type="button" name="button"><div id="uploadBtnIcon"></div>UPLOAD</button></Link>
                
            </div>
            <div className="header__user--img">
            </div>
        </div>
    )
}

export default Header
