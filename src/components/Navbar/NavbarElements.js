import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
//import { Link as LinkR } from 'react-router-dom';


export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000': '#000')};
    height: 80px;
    display: flex;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 1000;

   

    @media screen and (max-width: 960px)
    {
        transition: 0.8s all ease;
    }
`;



export const NavbarContainer = styled.div`
    top: 0;
    position: fixed;
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 10;
    width: 100%;
    padding: 0 4rem;
    max-width: 1700px;
`;

export const NavLogo = styled(LinkS)`
{
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    color: white;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
}
`;

export const MobileIcon = styled.div`
    display: none;
        
    @media screen and (max-width: 768px)
    {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const FaBars = styled.div`
    background-color: #fff;
`

export const NavMenu = styled.ul`
    color: #fff;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -5px; 
    font-weight: bold;
    z-index: 9;

    @media screen and (max-width: 768px)
    {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    text-decoration: none;
    height: 100%;
    cursor: pointer; 
    color: #fff;  

    &.active{
        border-bottom: 3px solid #3AE4B8;
    }

    &:hover {
        color: #3AE4B8;
        transform: translateX(0px) translateY(-3px);
        transform: ease;
        transition: 0.2s ease-in-out;
        }
`;