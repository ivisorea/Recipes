import React from 'react'
import { NavLink, Nav, NavMenu } from './styles';


const Navbar = () => {
    return (
        
            <Nav>
                <NavLink to='/' exact activeStyle={{ color: '#a3fc15' }}>Home</NavLink>

                <NavMenu>
                    <NavLink to="/recipe" activeStyle>
                    Create Recipe
                    </NavLink>
                    <NavLink to="/pages/aboutus" activeStyle>
                    About Us
                    </NavLink>
                    <NavLink to="/pages/contactus" activeStyle>
                     Contact Us   
                    </NavLink>
                </NavMenu>
            </Nav> 
        
    )
}

export default Navbar
