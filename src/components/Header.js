import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="top-menu-Container">
            <div className="top-menu-wrapper">
                <div className="logo-Container">
                    <div className="logo-img-container">
                        <Link to="/"><img className="logo-img" src="./assets/images/logopic.png" /></Link>
                    </div>
                </div>
                <div className="top-menu-list-Container">
                    <ul className="top-menu-list-wrapper">
                        <Link to="/signin" className="top-menu-list-link"><li>Sign in</li></Link>
                        <Link to="/signup" className="top-menu-list-link"><li>Signup</li></Link>
                        <Link to="/contact" className="top-menu-list-link"><li>Contact us</li></Link>
                        <Link to="/about" className="top-menu-list-link"><li>About us</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
