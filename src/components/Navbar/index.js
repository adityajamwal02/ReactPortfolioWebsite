import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll'

 const Navbar = ({toggle})=> {

    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = ()=>{
        if(window.scrollY >= 80)
        {
            setScrollNav(true)
        } 
        else{
            setScrollNav(false)
        }
    }

 useEffect(() => {
    window.addEventListener('scroll', changeNav)
 }, []);

 const toggleHome = () => {
    scroll.scrollToTop();
 };

 return (
    <>
    <IconContext.Provider value={{color: '#000'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>AJ</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars color='white'/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='resume'
                         smooth={true} duration={500} spy={true} exact='true' offset={-80}>Resume</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'
                         smooth={true} duration={500} spy={true} exact='true' offset={-79}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='connect'
                         smooth={true} duration={500} spy={true} exact='true' offset={-78}>Connect</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar