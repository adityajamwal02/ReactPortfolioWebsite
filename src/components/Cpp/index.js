import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, H1, Card, Cardbody, Cardname, Carddesc, BackLogo, Wrap, Button} from './CppElements'
import backimg from '../../images/arrow.svg'

const CPPPage = () => {
    const navigate = useNavigate();

  return (
    <>
    <Container>
        <H1>C++ Projects</H1>
        <Wrap>
            <Card>
                <Cardbody>
                    <Cardname>MilitaryMilitia</Cardname>
                    <Carddesc>
                        TECH: C++  <br/> <br/>
                        •Military Software <br/> •Data Structures & Algorithms •Object-Oriented Concepts <br/> •Daily & War Operations <br/> <br/> •Objective: ALGORITHMIC DEVELOPMENT FOR INDIAN MILITARY AT TERROR-PRONE REGIONS
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/MilitarySoftware.git">Watch Me ! </Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname>PhoneSe</Cardname>
                    <Carddesc>
                         TECH: C++  <br/> <br/>
                        •Phone Directory Management <br /> •Object-Oriented Concepts •Add records, Modify/update, Show, Search, Sort, Delete and Remove duplicate records <br/> <br/> •Objective: APPLICATION DATA MAINTENANCE, RETRIEVAL AND PERFORMING OPERATIONS
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/PhoneDirectory.git"> Watch Me !</Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname>TravelMe</Cardname>
                    <Carddesc>
                         TECH: C++  <br/> <br/>
                        •Travel Management <br /> •Object-Oriented Concepts •Register new customers, display, search, modify, delete records <br/> <br/> •Objective: MAINTAINS & UPDATES INVENTORY DATA OF REGISTERED CUSTOMERS
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/TravelManagement.git"> Watch Me ! </Button>
                </Cardbody> 
            </Card>
        </Wrap>
        <BackLogo src={backimg} onClick={() => navigate("/")}></BackLogo>
    </Container>   
    </>
  )
}

export default CPPPage