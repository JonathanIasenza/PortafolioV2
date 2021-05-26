import React, { useEffect } from 'react'
import '../../styles/Frontend.css'
import { SiFirebase , SiJavascript } from 'react-icons/si'
import { DiGit , DiCss3, DiReact , DiSass, DiJqueryLogo} from 'react-icons/di'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { BsFillBootstrapFill } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Frontend = () => {

    useEffect(()=>{
        Aos.init({duration: 3000});
      }, [])


    return(
        <div className="container-technologies" data-aos="fade-down" data-aos-delay="10">
                <h1 className="h1-technologies">Frontend</h1>
                <div className="cont-secondary">
                <p>HTML5 <AiFillHtml5 className="icon html5"/></p>
                <p>CSS3 <DiCss3 className="icon css3"/></p>
                <p>Javascript <SiJavascript className="icon javascript"/></p>
                <p>Bootstrap <BsFillBootstrapFill className="icon bootstrap"/></p>
                <p>React.js <DiReact className="icon react"/></p>
                <p>Git <DiGit className="icon git"/></p>
                <p>GitHub <AiFillGithub className="icon github"/></p>
                <p>Firebase <SiFirebase className="icon firebase"/></p>
                <p>jQuery <DiJqueryLogo className="icon jquery"/></p>
                <div id="backend"></div>
                <p>Sass <DiSass className="icon sass"/></p>
            </div>
        </div>
    )
}

export default Frontend;