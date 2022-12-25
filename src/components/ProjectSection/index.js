import React from 'react'
import Img1 from './projectimages/web-dev.svg'
import Img2 from './projectimages/c++.svg'
import Img3 from './projectimages/python.svg'
import Img4 from './projectimages/machine-learning.svg'
import Img5 from './projectimages/deep-learning.svg'
import { useNavigate } from "react-router-dom";

import { ProjectContainer, ProjectWrapper, ProjectWrapper2, TopLine, Card, Cardname, Cardbody, CardImg, Carddesc, ProjectLink } from './ProjectElements';


const ProjectSection = ({id, topLine}) => {

  const navigate = useNavigate();

    return (
    <ProjectContainer id={id}>
      <TopLine>{topLine}</TopLine>
      <ProjectWrapper>
          <Card>
            <CardImg src={Img1} />
            <Cardbody>
              <Cardname>WEB DEVELOPMENT</Cardname>
              <Carddesc>
                Alpha Fitness | Quick Quiz | Skyem | Portfolio
              </Carddesc>
              <ProjectLink onClick={() => navigate("/webdev")}>Explore Now!</ProjectLink>
            </Cardbody> 
          </Card>

          <Card>
            <CardImg src={Img2} />
            <Cardbody>
              <Cardname>C++</Cardname>
              <Carddesc>
                 PhoneSe | TravelMe | MilitaryMilitia
              </Carddesc>
              <ProjectLink onClick={() => navigate("/cpp")}>Explore Now!</ProjectLink>
            </Cardbody>
          </Card>

          <Card>
            <CardImg src={Img3} />
            <Cardbody>
              <Cardname>PYTHON</Cardname>
              <Carddesc>
                Collection of Creative Python Mini-Projects
              </Carddesc>
              <ProjectLink onClick={() => navigate("/python")}>Explore Now!</ProjectLink>
            </Cardbody>
          </Card>
        </ProjectWrapper>

        <ProjectWrapper2>
          <Card>
            <CardImg src={Img4} />
            <Cardbody>
              <Cardname>DATA SCIENCE & MACHINE LEARNING</Cardname>
              <Carddesc>
                 Titanical | Expresión | HouseBuy
              </Carddesc>
              <ProjectLink onClick={() => navigate("/machinelearning")}>Explore Now!</ProjectLink>
            </Cardbody>
          </Card>

          <Card>
            <CardImg src={Img5} />
            <Cardbody>
              <Cardname>DEEP LEARNING & ARTIFICIAL INTELLIGENCE</Cardname>
              <Carddesc>
                 Adi-Bot |  Détection d'objet
              </Carddesc>
              <ProjectLink onClick={() => navigate("/deeplearning")}>Explore Now!</ProjectLink>
            </Cardbody>
          </Card>

        </ProjectWrapper2>
      
    </ProjectContainer>

    );
  }
  
  export default ProjectSection