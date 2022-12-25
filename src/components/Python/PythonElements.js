import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;    
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H1 = styled.h1`
    margin-top: 5rem;
    color: #00CED1;
    font-family: 'Poppins';
    display: flex;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
`

export const Wrap = styled.div`
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;    
    grid-gap: 1.5rem;
    padding: 0 25px;

    @media screen and (max-width: 1168px)
    {
        grid-template-columns: 1fr;
        padding: 0 15px;
        grid-gap: 1px;
    }
`

export const Card = styled.div`
    background-color: #323232;
    margin-top: 4rem;
    margin-bottom: 2.5rem;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 18rem;
    overflow: hidden;
    box-shadow: 0 2px 7px #000;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in; 

    &:hover{
        transform: scale(1.02);
    }  
`

export const Cardbody = styled.div`
    display: block;
    justify-content: center;
    text-align: center;

`
export const Cardname = styled.h3`
    color: #fff;
    padding: 0.5rem;
    text-align: center;
    
`
export const Carddesc = styled.p`
    color: #fff;
    padding: 0 1rem;
    display: grid;
    grid-direction: column;
    text-align: left;

`
export const Button = styled.a`
    padding: 0.75rem;
    font-weight: bold;
    font-size: 1.05rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    border: 2px solid black;
    color: black;
    background-color: white;
    border-radius: 5px;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        color: black;
        transform: translateX(0px) translateY(-2px);
        transform: ease;
        transition: 0.2s ease-in-out;
        background-color: #3AE4B8;
    }
`

export const BackLogo = styled.img`
    width: 60px;
    cursor: pointer;
    justify-content: left;
    margin-bottom: 1rem;

    &:hover{
        transform: translateY(-3px);
    }

    @media screen and (max-width: 480px)
    {
       width: 35px;
    }
`