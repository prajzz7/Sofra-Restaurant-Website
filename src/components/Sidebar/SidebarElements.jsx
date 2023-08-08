import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.7s ease-in-out;

    opacity: ${({isOpen}) => (isOpen)?'0.973':'0'};
    top: ${({isOpen}) => (isOpen?'0':'-100%')};
    @media screen and (min-width: 600px) {
        display: none;
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const LogoS = styled(LinkS)`
color: #fff;
display: flex;
padding: 2rem;
margin-top: -100px;
margin-left: 105px;
cursor: pointer;
align-items: center;
text-decoration: none;
height: auto;

@media screen and (max-width: 800px) and (min-width:700px){
        padding-left: 220px;
    }
`
    

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;
    width: 100%;
    margin-top: -100px;

    @media screen and (max-width: 480px){
        grid-template-rows  : repeat(4, 80px);
        margin-top: -100px;
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 50px;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    text-transform: uppercase;
    font-family: caviar_dreamsbold, sans-serif;
    letter-spacing: 3px;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fabd2a;
    cursor: pointer;
    margin-top: -180px;

    &:hover {
        color: #d3a83c;
        transition: 0.9s ease-in-out;
    }
    &:active{
        background: #403c3c;
    }
`
export const SideSocialWrap = styled.div`
    display: flex;
    justify-content: center;
    
`

export const SocialMain = styled.div`
    padding: 20px;
    @media screen and (max-width: 768px){
     display   : none;
    }
`