import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="inner header-inner">
                <h1 className="logo">
                    <Link to='/'>K-ARCHIVE</Link>
                </h1>
                <Navbar />
            </div>
        </header>
    )
}

export default Header