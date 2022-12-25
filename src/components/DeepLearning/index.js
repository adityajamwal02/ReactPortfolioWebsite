import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, H1, Card, Cardbody, Cardname, Carddesc, BackLogo, Wrap, Button} from './DLElements'
import backimg from '../../images/arrow.svg'

const DLPage = () => {
    const navigate = useNavigate();

  return (
    <>
    <Container>
        <H1>DEEP LEARNING & ARTIFICIAL INTELLIGENCE PROJECTS</H1>
        <Wrap>
            <Card>
                <Cardbody>
                    <Cardname>Adi-Bot</Cardname>
                    <Carddesc>
                        TECH: Python, TensorFlow, APIs   <br/> <br/>
                        •Natural Language Processing <br/> •Conversational AI <br/> •Intents, Entities<br/> •Triggers, Establishments <br/> •Monitor & Hosting <br/> <br/> 
                    </Carddesc>
                    <Button> Currently Viewing ! </Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname>Détection d'objet</Cardname>
                    <Carddesc>
                        TECH: Python, NLP, APIs, TensorFlow/OpenCV  <br/> <br/>
                        •Conversational AI <br/> •ANN/RNN <br/> •Integrated System <br/> •Monitor & Hosting <br/> <br/> 
                    </Carddesc>
                    <Button> In Progress !</Button>
                </Cardbody> 
            </Card>

        </Wrap>
        <BackLogo src={backimg} onClick={() => navigate("/")}></BackLogo>
    </Container>   
    </>
  )
}

export default DLPage