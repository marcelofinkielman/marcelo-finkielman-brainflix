import React from 'react'
import Logo from "../../assets/logos/Logo-brainflix.svg"
import Upload from "../../assets/icons/Icon-upload.svg"
import Profile from "../../assets/images/Mohan-muruge.jpg"
import "../NavBar/NavBar.scss"


function NavBar({ video }) {
  return (
    <nav className='navBar'>
      <div className='navBar__topComponents'>
      <div className='navBar__logoContainer'>
        <img className="navBar__logo" src={Logo} alt="BigCo Inc. logo" />
      </div>
        <div className='navBar__components'>
          <input className="navBar__searchArea" placeholder={"Search"} />
          <div className='navBar__buttonAndPicture'>
            <button className="navBar__button"><img className="navBar__X" src={Upload} alt="BigCo Inc." /><span className='navBav__upload'>UPLOAD</span></button>
            <img className="navBar__profile" src={Profile} alt="BigCo Inc. logo" />
          </div>
        </div>
      </div>
      <div className='navBar__background'>
        <video poster={video.image} className="navBar__heroPicture" controls>
        </video>
      </div>
    </nav>
  )
}
export default NavBar;
