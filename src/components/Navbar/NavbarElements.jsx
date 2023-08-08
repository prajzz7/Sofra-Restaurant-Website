import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height:14vh;
    display: flex;
    align-items: center;
    opacity: 1;
    position:sticky;
    top:0;
    z-index: 10;

@media screen and (max-width: 480px){
    height: 12vh;
}
@media screen and (max-height: 400px) {
    height: 60px;
}
`

export const NavbarContainer = styled.div`
display:flex;
justify-content: space-between;
height: 120px;
opacity: 1;
width:100%;
padding:0 24px;

`

export const NavLogo = styled(LinkS)`
color: #fff;
display: flex;
padding: 2rem;
justify-self: flex-start;
cursor: pointer;
align-items: center;
text-decoration: none;
height: auto;

/* &:hover{
    transform: scale(1.5);} */
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 600px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
@media screen and (max-height:700px) {
    margin-top: -10px;
}
 `

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    

`

export const NavItem = styled.li`
    
    
    height: 100px;
    
    

`

export const NavLinks = styled(LinkS)`
    
    color: #fff;
    font-family:caviar_dreamsbold, sans-serif;
    /* font-weight: bold; */
    display:flex;
    align-items: center;
    text-decoration: none;
    padding:0 1rem;
    padding-top: 1rem;
    height: 100%;
    font-size: 15px;
    letter-spacing: 5px;
    cursor: pointer;
    &:hover{
        color:#fabd2a;
        text-shadow: 0px 0px 12px #fabd2a;
    }
    &:active{
        border-bottom: 3.5px solid #fabd2a;
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
    @media screen and (max-height: 400px) {
    font-size: 13px;
    &:active{
        border-bottom: 0px solid #fabd2a;
    }
}
`

export const SocialMain = styled.div`
    padding: 20px;
    @media screen and (max-width: 768px){
     display   : none;
    }
`