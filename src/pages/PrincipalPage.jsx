import React from 'react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Backend from '../components/Tecnologías/Backend'
import Frontend from '../components/Tecnologías/Frontend'
import Separador from '../components/Separador'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import ArrowUp from '../components/ArrowUp'

class PrincipalPage extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <NavBar/>
                <br/>
                <AboutMe/>
                <Separador/>
                <Frontend/>
                <Separador/>
                <Backend/>
                <Separador/>
                <Projects/>
                <Separador/>
                <Contact/>
                <ArrowUp/>
            </div>
        )
    }
}

export default PrincipalPage;