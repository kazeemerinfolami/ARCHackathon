import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    var currentYear = new Date().getFullYear();
    return (
        <footer className="footer-container">
            <div>
                <div className="top-footer">
                    <div>
                        <ul className="top-footer-list">
                            <Link className="top-menu-list-link"><li>privacy</li></Link>
                            <Link className="top-menu-list-link"><li>FAQ</li></Link>
                            <Link className="top-menu-list-link"><li>anything</li></Link>
                            <Link className="top-menu-list-link"><li>anythhhing</li></Link>
                        </ul>
                    </div>
                    <div className="footer-logo-Container">
                        <div className="footer-logo-img-container">
                            <Link to="/"><img className="footer-logo-img" src="./assets/images/logopic.png" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div>
                    ARCHackathon.com © {currentYear}, All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
