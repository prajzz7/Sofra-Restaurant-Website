import React from 'react'
import {FaBars} from 'react-icons/fa'
import {  Nav, NavbarContainer, NavItem, NavLinks, NavLogo, MobileIcon, NavMenu, SocialMain } from './NavbarElements';
import './index.css'
import sofra_logo from '../../sofra_logo_resize.svg'
import SocialFollow from '../../SocialFollow';
import styled from 'styled-components'
import SocialFollowFb from '../../SocialFollowFb';
import SocialFollowT from '../../SocialFollowT';



const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer> 
                <NavLogo to='pagetop'><img className='logoImg' src={sofra_logo} alt='sofra_logo'/></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="pagetop">HOME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">ABOUT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">CONTACT</NavLinks>
                    </NavItem>
                    <SocialMain><SocialFollow/></SocialMain>
                    <SocialMain><SocialFollowFb/></SocialMain>
                    <SocialMain><SocialFollowT/></SocialMain>

                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;