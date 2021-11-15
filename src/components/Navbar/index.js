import React from 'react'
import { NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                
                <NavLink to="/">
                    <i class="fas fa-hamburger" style={{display: "flex", justifyContent: "flex-start"}} alt="Home" ></i>
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
