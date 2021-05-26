/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "../styles/AboutMe.css";
import Jona from "../images/jonaa.png";
import Separador from './Separador'
import { Button } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import { Animated } from "react-animated-css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { VscCaseSensitive } from 'react-icons/vsc'
import gif from '../images/pc.gif'


const AboutMe = () => {
  useEffect(()=>{
    Aos.init({duration: 3000});
  }, [])

  const [active, setActive] = useState(false);
        
const Text = () => {
  if(document.readyState && active == false){
    var texto = document.getElementById('texto');
    texto.textContent = 'Jonathan Iasenza';
    var value = texto.getAttribute('value');

    texto.setAttribute("value", "Jonathan Iasenza")
    
    setActive(true);

  }else if(document.readyState && active == true){
    var texto = document.getElementById('texto');
    texto.textContent = 'JONATHAN IASENZA';
    var value = texto.getAttribute('value');

    texto.setAttribute("value", "JONATHAN IASENZA")
    

    setActive(false)
}
}

  return (
    <div className="container-principal">

<div className="bg-6">
        <div className="glitch" id="texto" value="JONATHAN IASENZA"
        >JONATHAN IASENZA </div> 
        <VscCaseSensitive id="mayusc" onClick={() => Text()} size="2em"/>
    </div>

      <div className="title-aboutme">
      <Animated animationIn="fadeIn" 
      animationInDuration="4000" 
      animationOut="fadeInDownBig" 
      isVisible={true}>

      <h1 className="jonathan-title">
          <FormattedMessage 
          id="app.welcome" 
          defaultMessage="Desarrollador Web"/>
        </h1>


  </Animated>
        <div className="jona-cont" >
          <img src={Jona}></img>
        </div>
      </div>
      <img id="gif" src={gif}></img>
      <div id="about-me"></div>
      <Separador />
      <div >
        <h1 className="about-title">
          <FormattedMessage 
          id="app.about-title"
          defaultMessage="Sobre mí">
          </FormattedMessage></h1>

          <div data-aos="fade-up">
        <div className="about-descr">
          <p>
           <FormattedMessage
           id="app.about-p"
           defaultMessage="Mi nombre es Jonathan Sebastián Iasenza, tengo 23 años, soy
           apasionado por la tecnología desde muy chico 💻. Me gusta mucho
           cocinar, me recibí de chef y trabajé por años en gastronomía🍳 . En
           mis tiempos libres suelo jugar juegos de PC y hablar con amigos. En
           cuánto a mis conocimientos, me enfoco más en el Frontend siempre se
           me dió bien Photoshop, CorelDraw entre otros programas de diseño
           gráfico, y si bien, ser desarrollador frontend no es sólo diseño,
           gran parte de la User UX/UI experience se basa en éso. Además me
           encuentro estudiando algunas tecnologías y bases de datos para tener
           conocimientos de Backend. Realizé y sigo realizando cursos en
           plataformas de aprendizaje cómo Udemy (con, o sin certificado),
           Youtube o incluso Linkedin qué ofrece algunos cursos. Soy una
           persona muy hiperactiva y, si... tomo café.☕">
           </FormattedMessage>
          </p>
        </div>
        </div>

        <div id="frontend"></div>
          <Button id="btn-cv" className="btn btn-dark">
            <a target="_blank" 
            href="https://drive.google.com/file/d/1PgthgNZ8I01jZQER_U5xg4odgqHpKO2l/view">
            <FormattedMessage
            id="app.download-cv"
            defaultMessage="Descarga mi CV"></FormattedMessage>
            </a>
          </Button>
      </div>
    </div>
  );
};

export default AboutMe;
