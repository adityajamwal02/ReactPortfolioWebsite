import styled from "styled-components";


export const HeroContainer = styled.div`  
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  height: 900px;
  z-index: 1;

  :before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%),
                linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%);
    z-index: 1;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  z-index: -10;
  overflow: hidden;  
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    opacity: 1;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    padding: 8px 24px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H1 = styled.h1`
  color: white;
  font-size: 58px;
  text-align: center;

  @media screen and (max-width: 768px)
  {
    font-size: 40px;
  }

  @media screen and (max-width: 480px)
  {
    font-size: 32px;
  }
`

export const HeroP = styled.p`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  max-width: 700px;
  z-index: 99;

  @media screen and (max-width: 768px)
  {
    
    font-size: 23px;
  }

  @media screen and (max-width: 480px)
  {
    font-size: 19px;
  }
`
