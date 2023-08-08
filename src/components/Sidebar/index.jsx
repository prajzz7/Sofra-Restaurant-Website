import React from 'react'
import { SidebarContainer, Icon, LogoS, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideSocialWrap, SocialMain } from './SidebarElements'
import SocialFollow from '../../SocialFollow'
import SocialFollowFb from '../../SocialFollowFb'
import SocialFollowT from '../../SocialFollowT'
import sofra_logo from '../../sofra_logo_resize.svg'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
        <LogoS><img src={sofra_logo}></img></LogoS>
        <Icon onClick={toggle}>
            
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="pagetop" onClick={toggle}>Home </SidebarLink>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
            </SidebarMenu>
            <SideSocialWrap>
                <SocialFollow/>
                <SocialFollowFb/>
                <SocialFollowT/>
            </SideSocialWrap>

        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar