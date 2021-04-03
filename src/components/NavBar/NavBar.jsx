import React from 'react'
import Logo from "../../assets/logos/Logo-brainflix.svg"
import Upload from "../../assets/icons/Icon-upload.svg"
import Profile from "../../assets/images/Mohan-muruge.jpg"
import "../NavBar/NavBar.scss"


function NavBar() {
  return (
    <nav className='navBar'>
    
      <img className="navBar__logo" src={Logo} alt="BigCo Inc. logo" />
      <div className='navBar__components'>
      <input className="navBar__searchArea" placeholder={"Search"} />
        {/* <input className="navBar__searchArea" type="search"/> */}
        <div className='navBar__buttonAndPicture'>
          <button className="navBar__button"><img className="navBar__X" src={Upload} alt="BigCo Inc." />UPLOAD</button>
          <img className="navBar__profile" src={Profile} alt="BigCo Inc. logo" />
        </div>
      </div>
    </nav>
  )
}
export default NavBar;
