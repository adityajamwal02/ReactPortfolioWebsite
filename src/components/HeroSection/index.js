import React from 'react'
import Video from '../../videos/video.mp4'
import { useTypewriter } from 'react-simple-typewriter';
import { HeroContainer, VideoBg, HeroBg, HeroContent, HeroP, H1 } from './HeroElements'

const HeroSection = () => {

  const {text} = useTypewriter({
    words: [ "HI, I'M ADITYA JAMWAL","I AM A DEVELOPER ","I AM A LEARNER ","I AM AN INNOVATOR ",],
    loop: 0,
    startDelay: 50,
    typeSpeed: 90,
    deleteSpeed: 90,
    delaySpeed: 1000
    })

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
        <H1> { text }</H1>
          <HeroP>
            Developer | Sophomore | Innovator
          </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection