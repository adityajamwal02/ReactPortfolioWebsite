import styled from 'styled-components'
//import {Link as LinkR} from 'react-router-dom'
 
export const InfoContainer = styled.div`
  color: rgba(0, 0, 0, 0.9);
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
  @media screen and (max-width: 1080px)
  {
    padding: 20px 20px;
  }

  @media screen and (max-width: 768px)
  {
    padding: 100px 100px;
  }

  @media screen and (max-width: 480px)
  {
    padding: 50px 50px;
  }


`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  height: 650px;
  max-width: 1800px;
  /* margin-right: 2rem; */
  /* margin-left: 2rem; */
  padding: 0 15px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media screen and (max-width: 768px)
  {
    height: 850px;
  }
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px)
  {
   grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 30px;
    grid-area: col1;
`



export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 30px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 900px;
    padding-bottom: 60px;
    margin-left: 1.2rem;

`

export const TopLine = styled.p`
    color: #3AE4B8;
    font-size: 28px;
    line-height: 26px;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    @media screen and (max-width: 550px)
    {
        font-size: 23px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    margin-top: 4rem;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 580;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px)
    {
        font-size: 30px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 35px;
    margin-top: 1rem;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`
/*
export const SubMenu = styled.ul`
    
`
export const SubItem = styled.li`

`

export const SubLinks = styled(LinkR)`

`
*/

export const Imgme = styled.img`
  width:100%;
`

export const ImgWrap = styled.div`
  max-width: 350px;
  height: 100%;
  margin-top: 1rem;
  margin-left: 10rem;

  @media screen and (max-width: 1200px)
  {
    max-width: 400px;
    margin-left: 1rem;
  }
`

