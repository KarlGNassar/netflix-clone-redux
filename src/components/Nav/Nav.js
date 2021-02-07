import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false)
    const history = useHistory()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)

        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__content">
                <img 
                    className="nav__logo" 
                    src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png" 
                    alt="Netflix Logo"
                    onClick={() => history.push('/')}
                />
                <img 
                    className="nav__avatar" 
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                    alt="Avatar"
                    onClick={() => history.push('/profile')}
                />
            </div>
        </div>
    )
}

export default Nav
