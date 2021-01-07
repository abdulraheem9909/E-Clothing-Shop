import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../../assets/icons8-bag-48.png"
import "./Header.scss"

function Header() {
  return (
    <div className="header">
    <Link className="logo-container" to ="/" >
    <img src={Logo} alt='.'></img>
    </Link>
    <div className="options">
    <Link className="option" to="/shop">SHOP</Link>
    <Link className="option" to="/shop">CONTACT</Link>
    </div>
      
    </div>
  )
}

export default Header
