import React from 'react'
import { SidebarContainer, Icon, SidebarMenu, SidebarWrapper, SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}> </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="resume" onClick={toggle}>Resume</SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                <SidebarLink to="connect" onClick={toggle}>Connect</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar