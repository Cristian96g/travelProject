import './Navbar.css'
// Imported icons
import { BiLogoMediumOld } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'
import { useState } from 'react'

const Navbar = () => {
  const [navBar, setNavbar] = useState('menu');
  // function show navbar
  const showNavbar = () => {
    setNavbar("menu showNavBar");
  }

  const removeNavbar = () =>{
    setNavbar("menu");
  }

  return (
    <div className='navBar'>
      <div className="logoDiv">
        <BiLogoMediumOld className='icon'/>
        <span>Dream-Voyage</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">Destinos</li>
          <li className="navList">Sobre nosotros</li>
          <li className="navList">Testimonios</li>
          <li className="navList">Galeria</li>
        </ul>

        {/* icons to remove Navbar*/}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <button className='signUpBtn btn'>Sign Up</button>
      {/* icon to toggle Navbar */}
      <PiDotsNineBold className="icon menuIcon" 
      onClick={showNavbar}
      />
    </div>
  )
}

export default Navbar