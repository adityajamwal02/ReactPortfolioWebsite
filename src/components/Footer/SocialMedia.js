import React from 'react'
import { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import './index.css'

const socialMediaHandlesLinks = {
    gitHub: 'https://github.com/adityajamwal02',
    mail: 'mailto: aditya.vicky01@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aditya-jamwal-aa6007206/',
    twitter: 'https://twitter.com/AdityaJamwal02',
  }

  class SocialMediaHandles extends Component {
    render() {
      return (
        <div class="social-menu">
          <ul class="social-handle-list">
            <li className="social-handle-item">
              <SocialIcon url={socialMediaHandlesLinks.gitHub} bgColor="#000" />
            </li>
  
            <li className="social-handle-item">
              <SocialIcon url={socialMediaHandlesLinks.linkedin} bgColor="#000"/>
            </li>
  
            <li className="social-handle-item">
              <SocialIcon url={socialMediaHandlesLinks.twitter} bgColor="#000" />
            </li>

            <li className="social-handle-item">
              <SocialIcon url={socialMediaHandlesLinks.mail} bgColor="#000" />
            </li>
  
            
          </ul>
        </div>
      )
    }
  }
  
  export default SocialMediaHandles
  