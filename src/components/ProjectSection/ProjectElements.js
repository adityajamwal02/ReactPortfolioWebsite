import styled from "styled-components";
//import { Link as LinkR } from "react-router-dom";

export const TopLine = styled.h2`
    color: #3AE4B8;
    margin-top: 2rem;
    font-size: 30px;
    line-height: 26px;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    @media screen and (max-width: 550px)
    {
        font-size: 23px;
    }
`

export const ProjectContainer = styled.div`
  background-color: #000;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px)
  {
    height: 100%;
  }
  `

export const ProjectWrapper= styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 2rem;
    padding: 0 50px;

    @media screen and (max-width: 1150px)
    {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px)
    {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectWrapper2= styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 2rem;
    padding: 0 50px;

    @media screen and (max-width: 1150px)
    {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px)
    {
        grid-template-columns: 1fr;
        padding: 0 20px;
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
    box-shadow: 0 2px 7px #3AE4B8;
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
    padding: 1rem;
    text-align: center;
    
`
export const Carddesc = styled.p`
    color: #fff;
    padding: 0 1rem;
    text-align: center;

`

export const CardImg = styled.img`
   width: 100%;
   height: 12rem;
   border: 1px solid white;
   border-radius: 0.5rem; 

`

export const ProjectLink = styled.button`
    padding: 0.75rem;
    font-weight: bold;
    font-size: 1.05rem;
    display: flex;
    justify-content: center;
    margin: 1rem;
    margin-left: 4.5rem;
    border: 2px solid black;
    color: black;
    background-color: white;

    &:hover{
        cursor: pointer;
        color: black;
        transform: translateX(0px) translateY(-2px);
        transform: ease;
        transition: 0.2s ease-in-out;
        background-color: #3AE4B8;
    }

`