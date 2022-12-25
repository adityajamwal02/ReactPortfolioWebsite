import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, H1, Card, Cardbody, Cardname, Carddesc, BackLogo, Wrap, Button} from './WebDevElements'
import backimg from '../../images/arrow.svg'

const WebDevPage = () => {
    const navigate = useNavigate();

  return (
    <>
    <Container>
        <H1>Web Development Projects</H1>
        <Wrap>
            <Card>
                <Cardbody>
                    <Cardname>PORTFOLIO</Cardname>
                    <Carddesc>
                        TECH: REACT/JS <br/> <br/>
                        •Responsive React Website •Integrated Designed ChatBot •Vertical TimeLine Resume •Routing Projects Section •Contact Information
                    </Carddesc>
                    <Button onClick={() => navigate("/")}>Currently viewing !</Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname>ALPHA FITNESS</Cardname>
                    <Carddesc>
                        TECH: HTML/CSS/JS/PHP/SQL<br/> <br/>
                        •Basic Responsive Website •Integrated Payment GateWay •User Authentication •Membership Page & Cart •Backend Updation
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/ALPHA-FITNESS.git"> Watch Me ! </Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname>QUICK QUIZ</Cardname>
                    <Carddesc>
                        TECH: HTML/CSS/JS/APIs<br/> <br/>
                        •Basic Quiz WebSite <br /> •Intergrated APIs Questions •High Score Maintanance •Progress Bar and Score Updation
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/QuickQuiz.git"> WATCH </Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname>SKYEM</Cardname>
                    <Carddesc>
                        TECH: HTML/CSS/BOOTSTRAP<br/> <br/>
                        •Basic Travel WebSite <br /> •Bootstrap Styling <br/> •Website Linking <br /> •Blog Posts 
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/Web-Dev.git"> WATCH </Button>
                </Cardbody> 
            </Card>
        </Wrap>
        <BackLogo src={backimg} onClick={() => navigate("/")}></BackLogo>
    </Container>   
    </>
  )
}

export default WebDevPage