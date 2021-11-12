import React from 'react'
import { NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                
                <NavLink to="/">
                    <a class="fas fa-hamburger" style={{display: "flex", justifyContent: "flex-start"}} alt="Home" ></a>
                </NavLink>
                
                <Bars />
                <NavMenu>
                    <NavLink to="/pages/aboutus" activeStyle>
                    About Us
                    </NavLink>
                    <NavLink to="/pages/contactus" activeStyle>
                     Contact Us   
                    </NavLink>
                </NavMenu>
                <NavBtn>
                 <NavBtnLink to='/pages/signin'>Sign In</NavBtnLink>
                 </NavBtn>
            </Nav> 
        </>
    )
}

export default Navbar
