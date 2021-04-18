import React from 'react'
import Logo from "../../assets/logos/Logo-brainflix.svg"
import Upload from "../../assets/icons/Icon-upload.svg"
import Profile from "../../assets/images/Mohan-muruge.jpg"
import "../NavBar/NavBar.scss"
import { Link } from "react-router-dom"


function NavBar(/* { video } */) {
  return (
    <nav className='navBar'>
      <div className='navBar__top-components'>
        <div className='navBar__logo-container'>
          <Link to="/">
            <img className="navBar__logo" src={Logo} alt="BigCo Inc. logo" />
          </Link>
        </div>
        <div className='navBar__components'>
          <input className="navBar__search-area" placeholder="Search" />
          <div className='navBar__button-and-picture'>
            <Link to='/Upload' className='navBar__link'>
              <button className="navBar__button">
                <img className="navBar__X" src={Upload} alt="BigCo Inc." />
                <span className='navBav__upload'>UPLOAD</span>
              </button>
            </Link>
            <img className="navBar__profile" src={Profile} alt="BigCo Inc. logo" />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;
