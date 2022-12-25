import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, H1, Card, Cardbody, Cardname, Carddesc, BackLogo, Wrap, Button} from './PythonElements'
import backimg from '../../images/arrow.svg'

const PythonPage = () => {
    const navigate = useNavigate();

  return (
    <>
    <Container>
        <H1>Python Projects</H1>
        <Wrap>
            <Card>
                <Cardbody>
                    <Cardname>Applications</Cardname>
                    <Carddesc>
                        TECH: Python  <br/> <br/>
                        •GUI Application <br/> •File-Sorter <br/> •URL ShortenerExpander <br/> •Calculator <br/> <br/> 
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/PythonProjects.git">Watch Me ! </Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname>Games</Cardname>
                    <Carddesc>
                         TECH: Python  <br/> <br/>
                        •Four-In-A-Row <br /> •Tic-Tac-Toe <br/> •Monty-Hall Paradox <br/> •Cipher-Leetcode <br/> <br/> 
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/PythonProjects.git"> Watch Me !</Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname>Others</Cardname>
                    <Carddesc>
                         TECH: Python  <br/> <br/>
                        •Random Password Generator <br /> •Currency Converter <br/> •Name Generator <br/> •Data Manipulation <br/> <br/> 
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/PythonProjects.git"> Watch Me ! </Button>
                </Cardbody> 
            </Card>
        </Wrap>
        <BackLogo src={backimg} onClick={() => navigate("/")}></BackLogo>
    </Container>   
    </>
  )
}

export default PythonPage