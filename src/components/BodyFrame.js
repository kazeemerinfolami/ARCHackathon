import React from 'react'
import Header from './Header'
import Footer from './Footer'

function BodyFrame({ children }) {
    return (
        <div className="desktop-container">
            <div className="desktop-wrapper">
                <Header />
                <div className="desktop-children-wrapper">
                    {children}
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default BodyFrame
