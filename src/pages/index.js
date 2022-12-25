import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Resume from '../components/ResumeSection'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'
import { homeObjOne } from '../components/InfoSection/DataInfo'
import { homeObjThree } from '../components/ProjectSection/DataProjects'
import { homeObjFour } from '../components/Footer/DataFooter'
import { homeObjTwo } from '../components/ResumeSection/DataResume'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroSection  />
        <Navbar toggle={toggle} />
        <InfoSection {...homeObjOne} />
        <Resume {...homeObjTwo}/>
        <ProjectSection {...homeObjThree} />
        <Footer {...homeObjFour} />
    </>
  )
}

export default Home;