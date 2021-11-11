import React from 'react'
import { NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img /*src={require('')}*/ alt="Home" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/pages/aboutus" activeStyle>
                    About Us
                    </NavLink>
                    <NavLink to="/recipie" activeStyle>
                    ?????????
                    </NavLink>
                    <NavLink to="/vegetarien" activeStyle>
                    ????????
                    </NavLink>
                    <NavLink to="/pages/contactus" activeStyle>
                     Contact Us   
                    </NavLink>
                </NavMenu>
                <NavBtn>
                 <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                 </NavBtn>
            </Nav> 
        </>
    )
}

export default Navbar
