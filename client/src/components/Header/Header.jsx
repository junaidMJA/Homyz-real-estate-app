import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import ProfileMenu from '../ProfileMenu/ProfileMenu'
import AddPropertyModal from '../AddPropertyModal/AddPropertyModal'
import useHeaderColor from '../../hooks/useHeaderColor'
import useAuthCheck from '../../hooks/useAuthCheck'

import './Header.css'

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const headerColor = useHeaderColor()
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()
    const { validateLogin } = useAuthCheck()
    const [modalOpened, setModalOpened] = useState(false)

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return {right: !menuOpened && "-100%"}
        }
    }

    const handleLoginClick = async () => {
        try {
          await loginWithRedirect();
        } catch (error) {
          console.error('Error during login:', error);
        }
    };

    const handleAddPropertyClick = () => {
        if (validateLogin()) {
            setModalOpened(true)
        }
    }

    return (
        <section className="h-wrapper" style={{ background: headerColor }}>
            <div className="h-container flexCenter paddings innerWidth">
                <Link to="/">
                    <img src="./logo.png" alt="Logo" width={100} />
                </Link>
                <OutsideClickHandler
                    onOutsideClick={() => {setMenuOpened(false)}}
                >
                    <div 
                        className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <NavLink to="/properties">Properties</NavLink>
                        <a onClick={handleAddPropertyClick} >Add Property</a>
                        <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
                        <a href="mailto:contact.maiznadeem@gmail.com">Contact Us</a>
                        {
                            !isAuthenticated ?
                            <button className="button" onClick={handleLoginClick} >Login</button>
                            : <ProfileMenu user={user} logout={logout} />
                        }
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)} >
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}

export default Header