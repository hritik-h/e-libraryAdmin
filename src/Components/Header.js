import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header'>
            {/* Logo */}
            <Link to='/'>
                <img className="header__logo" src="https://www.virtusa.com/content/dam/virtusa/images/logo/shared/virtusa-logo.png" />
            </Link>

            {/* Search bar */}
            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Welcome! Can search here" />
                {/* Search Icon */}
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* Navbar */}
            <div className="header__nav">
                <Link to='/login'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to='/membership'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Membership</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
