import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: #f9f9f9;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px)
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Heading = styled.h3`
    margin-bottom: 24px;
    margin-top: 7rem;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 580;
    color: #000;

    @media screen and (max-width: 880px)
    {
        margin-top: 5rem;
        text-align: center;
    }
    @media screen and (max-width: 480px)
    {
        text-align: center;    
    }
`

export const FooterLinksContainer = styled.div`
    margin-top: -1rem;
    display: flex;
    align-items: center;
    max-width: 400px;
    justify-content: space-between;

    @media screen and (max-width: 480px)
    {
        font-size: 20px;

    }
`

export const WebRights = styled.div`
    margin-top: 4.5rem;
    color: #616161;

    @media screen and (max-width: 768px)
    {
        margin-top: 4rem;
        text-align: center;
    }
    @media screen and (max-width: 480px)
    {
        margin-top: 4rem;
        text-align: center;
    }
`

export const Dedicated = styled.div`
    margin-top: 0.25rem;
    margin-bottom: 1rem;
    color: #616161;

    @media screen and (max-width: 768px)
    {
        text-align: center;
    }
    @media screen and (max-width: 480px)
    {
        text-align: center;
    }
`

export const Dlink = styled.a`
    text-decoration: none;
    color: #000;

    &:hover{
        cursor: pointer;
        color: #00CED1;
        font-weight: bold;
        transform: ease;
        transition: 0.2s ease-in-out;
    }
`

export const UpLogo = styled.img`
    width: 60px;
    display: block;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover{
        transform: translateY(-3px);
    }

    @media screen and (max-width: 480px)
    {
       width: 45px;
       margin-left: auto;
       margin-right: auto;
  }
`

export const ToolsWrap = styled.div`
    width: 100%;
`


export const H1 = styled.h1`
    margin-top: 3rem;
    color: #00747D;
    font-family: 'Poppins';
    display: flex;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 58px;

    @media screen and (max-width: 1000px)
    {
        font-size: 48px;
    }
    @media screen and (max-width: 640px)
    {
        font-size: 40px;
        justify-content: center;
        text-align: center;
    }
`