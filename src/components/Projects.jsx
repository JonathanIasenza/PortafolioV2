import React, { useEffect } from "react";
import "../styles/Projects.css";
import Card from "react-bootstrap/Card";
import { AiFillGithub } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  useEffect(()=>{
    Aos.init({duration: 3000});
  }, [])
  
  return (
    <div className="container-projects" data-aos="fade-in" data-aos-delay="10">
      <h1 className="projects-title"><FormattedMessage id="proy.title" defaultMessage="Proyectos"></FormattedMessage></h1>
        <div className="container-div">

        <Card bg="dark" style={{ width: "30rem", display:"flex" }} className="mb-2" >
          <Card.Title style={{ textAlign: "center", marginTop: "10px" }}>
           <FormattedMessage id="app.proy-1t" defaultMessage="¿Qué debo realizar?"></FormattedMessage>
          </Card.Title>
          <Card.Img src="https://i.ibb.co/2s3bLHk/Andreani.png"></Card.Img>
          <Card.Body>
            <Card.Text style={{textAlign:'center'}}>
              <FormattedMessage id="app.proy-1p" 
              defaultMessage="Pequeño test realizado para la empresa Andreani, se trata de una
              lista de los qué haceres realizada con React.js y Bootstrap, la
              información se guarda en el Local Storage así qué no se pierden
              las tareas al refrescar la página."></FormattedMessage>
            </Card.Text>
            <div className="git-link">
            <a href="https://andreani-test.web.app"><BsLink45Deg className="link-link" size="1.8em"/></a>
            <a href="https://github.com/JonathanIasenza/AndreaniTest"><AiFillGithub className="link-github" size="2em"/></a>
            </div>
          </Card.Body>
        </Card>

        <Card bg="dark" style={{ width: "30rem" , display:"flex" }} className="mb-2" >
          <Card.Title style={{ textAlign: "center", marginTop: "10px" }}>
            <FormattedMessage id="app.proy-2t" defaultMessage="Calculadora OP"></FormattedMessage>
          </Card.Title>
          <Card.Img src="https://i.ibb.co/kKGLfJS/Calculadora-Op.png"></Card.Img>
          <Card.Body>
            <Card.Text style={{textAlign:'center'}}>
              <FormattedMessage id="app.proy-2p" defaultMessage="Calculadora simple realizada con Javascript Vanilla, Bootstrap, y un reproductor de música 
              en HTML5."></FormattedMessage>
            </Card.Text>
            <div className="git-link">
            <a href="https://calc-app-iasenza.web.app"><BsLink45Deg className="link-link" size="1.8em"/></a>
            <a href="https://github.com/JonathanIasenza/Calc-App"><AiFillGithub className="link-github" size="2em"/></a>
            </div>
          </Card.Body>
        </Card>
            
        <Card bg="dark" style={{ width: "30rem" , display:"flex" }} className="mb-2" >
          <Card.Title style={{ textAlign: "center", marginTop: "10px" }}>
            <FormattedMessage id="app.proy-3t" defaultMessage="Figuras Geométricas"></FormattedMessage>
          </Card.Title>
          <Card.Img src="https://i.ibb.co/3RGVDh9/Figuras-Geometricas.png"></Card.Img>
          <Card.Body>
            <Card.Text style={{textAlign:'center'}}>
             <FormattedMessage id="app.proy-3p" defaultMessage="Realizada con Javascript Vanilla, usando librerías cómo jQuery, Bootstrap, permite agregar figuras geométricas, filtrarlas, eliminarlas, etc."></FormattedMessage>
            </Card.Text>
            <div className="git-link">
            <a href="https://figuras-geometricas-j.web.app"><BsLink45Deg className="link-link" size="1.8em"/></a>
            <a href="https://github.com/JonathanIasenza/FigurasGeometricas"><AiFillGithub className="link-github"  size="2em"/></a>
            </div>
          </Card.Body>
        </Card>

        <Card bg="dark" style={{ width: "30rem" , display:"flex" }} className="mb-2" >
          <Card.Title style={{ textAlign: "center", marginTop: "10px" }}>
            <FormattedMessage id="app.proy-4t" defaultMessage="Aplicación de Ejercicios"></FormattedMessage>
          </Card.Title>
          <Card.Img src="https://i.ibb.co/JKQkrXw/Fitness.png"></Card.Img>
          <Card.Body>
            <Card.Text style={{textAlign:'center'}}>
              <FormattedMessage id="app.proy-4p" defaultMessage="Realizada con React.js, React Router, Material UI, Hooks, etc. Tiene información de distintos ejercicios, y permite crear tarjetas personalizadas qué se guardan en local storage. El backend está hecho con Node usando Express. La base de datos está realizada con SQLite."></FormattedMessage>
            </Card.Text>
            <div className="git-link">
            <a href="https://fitness-project-63a77.web.app"><BsLink45Deg className="link-link" size="1.8em"/></a>
            <a href="https://github.com/JonathanIasenza/Fitness-app"><AiFillGithub className="link-github"  size="2em"/></a>
            </div>
          </Card.Body>
        </Card>

        <Card bg="dark" style={{ width: "30rem" , display:"flex" }} className="mb-2" >
          <Card.Title style={{ textAlign: "center", marginTop: "10px" }}>
            <FormattedMessage id="app.proy-5t" defaultMessage="¡Bandas de Rock!"></FormattedMessage>
          </Card.Title>
          <Card.Img src="https://i.ibb.co/RgK3Px4/Music.png"></Card.Img>
          <Card.Body>
            <Card.Text style={{textAlign:'center'}}>
             <FormattedMessage id="app.proy-5p" defaultMessage="Realizada con React.js, React Router, Reactstrap, Hooks, se consume una API, consiste en un login, y una tabla de diferentes bandas. Permite filtrar, ordenar, y clickear sobre cada banda brindando información, incluyendo un botón para ver los albumes de cada una."></FormattedMessage>
            </Card.Text>
            <div className="git-link">
            <a href="https://music-app-21.web.app"><BsLink45Deg className="link-link" size="1.8em"/></a>
            <a href="https://github.com/JonathanIasenza/MusicApp"><AiFillGithub className="link-github"  size="2em"/></a>
            </div>
          </Card.Body>
        </Card>

        <Card bg="dark" style={{ width: "30rem" , display:"flex" }} className="mb-2" >
          <Card.Title style={{ textAlign: "center", marginTop: "10px" }}>
            <FormattedMessage id="app.proy-6t" defaultMessage="Lista de Usuarios (CRUD)"></FormattedMessage>
          </Card.Title>
          <Card.Img src="https://i.ibb.co/bFDtwT8/Users.png"></Card.Img>
          <Card.Body>
            <Card.Text style={{textAlign:'center'}}>
             <FormattedMessage id="app.proy-6p" defaultMessage="Realizada con React.js, consiste en un fake login (JSON), consume una pequeña API realizada con Express, y luego permite visualizar una tabla de distintos usuarios predeterminados guardados en una base de datos creada con MongoDB en la nube. Se permite crear, eliminar, o editar dichos usuarios."></FormattedMessage>
            </Card.Text>
            <div className="git-link">
            <a href="https://users-app-21.web.app"><BsLink45Deg className="link-link" size="1.8em"/></a>
            <a href="https://github.com/JonathanIasenza/UserListApp"><AiFillGithub className="link-github"  size="2em"/></a>
            </div>
          </Card.Body>
        </Card>
        </div>
        <div id="contact"></div>
    </div>
  );
};

export default Projects;
