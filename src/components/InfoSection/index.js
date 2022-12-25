import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Subtitle, Heading, ImgWrap, Imgme} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, headline, description, imgme, alt}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading darkText={darkText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Imgme src={imgme} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection;


/* <SubMenu>
    <SubItem>
        NAME: Aditya Jamwal
    </SubItem>
    <SubItem>
        COUNTRY: India
    </SubItem>
    <SubItem>
        <SubLinks href="https://www.linkedin.com/in/aditya-jamwal-aa6007206/">LinkedIn</SubLinks>
    </SubItem>
    <SubItem>
        <SubLinks href="https://github.com/adityajamwal02">GitHub</SubLinks>
    </SubItem>
</SubMenu> */