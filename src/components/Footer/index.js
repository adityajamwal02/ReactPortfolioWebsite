import React from 'react'
import { FooterContainer, Heading, FooterLinksContainer, WebRights, Dedicated, Dlink, UpLogo, ToolsWrap, H1} from './FooterElements';
import img1 from '../../images/arrow.svg'
import SocialMediaHandles from './SocialMedia'
import { animateScroll as scroll } from 'react-scroll';
import './toolindex.css'


let imgs =[
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'https://cdn.worldvectorlogo.com/logos/django.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
  'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
  'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg'
];

const Footer = ({id, headline}) => {

  const toggleHome = () => {
    scroll.scrollToTop();
 };

  return (
  <FooterContainer id={id}>
    <ToolsWrap>
        <H1>Languages and Tools</H1> 

        <div class="tool-menu">
      <ul class="tool-handle-list">
      <li className="tool-handle-item">
              <img class="phototool" src={imgs[0]} alt=' ' /> 
         </li>
  
            <li className="tool-handle-item">
              <img class="phototool" src={imgs[1]}   alt='' />

              </li>
  
            <li className="tool-handle-item">
              <img class="phototool" src={imgs[2]}   alt='' />
              </li>

            <li className="tool-handle-item">
              <img class="phototool" src={imgs[3]}   alt='' />
              </li>

            <li className="tool-handle-item">
              <img class="phototool" src={imgs[4]}  alt='' />
              </li>
  
            <li className="tool-handle-item">
              <img class="phototool" src={imgs[5]}   alt='' />

              </li>
  
            <li className="tool-handle-item">
              <img class="phototool" src={imgs[6]}   alt='' />
              </li>

            <li className="tool-handle-item">
              <img class="phototool" src={imgs[7]}  alt='' />
              </li>
            <li className="tool-handle-item">
              <img class="phototool" src={imgs[8]}   alt='' />
              </li>
  
            <li className="tool-handle-item">
              <img class="phototool" src={imgs[9]}   alt='' />
              </li>
  
            <li className="tool-handle-item">
              <img class="phototool" src={imgs[10]}   alt='' />
              </li>

            <li className="tool-handle-item">
              <img class="phototool" src={imgs[11]}   alt='' />
              </li>

            <li className="tool-handle-item">
              <img class="phototool" src={imgs[12]}  alt='' />
              </li>

            <li className="tool-handle-item">
              <img class="phototool" src={imgs[13]}   alt='' />
              </li>

            <li className="tool-handle-item">
              <img class="phototool" src={imgs[14]}   alt='' />
              </li> 

            <li className="tool-handle-item">
              <img class="phototool" src={imgs[15]}   alt='' />
              </li>  
          </ul>
    </div>
    </ToolsWrap>
    
          <Heading>{headline}</Heading>
            <FooterLinksContainer>
              <SocialMediaHandles />
            </FooterLinksContainer>
            <WebRights>© {new Date().getFullYear()} ALL RIGHTS RESERVED.
            </WebRights>
            <Dedicated>Designed by:
                <Dlink href='https://www.linkedin.com/in/aditya-jamwal-aa6007206/'>  Aditya Jamwal</Dlink>
            </Dedicated>
            <UpLogo to='/' onClick={toggleHome} src={img1}></UpLogo>
    </FooterContainer>
    
  )
}

export default Footer