import React, { useEffect } from 'react';
import '../../styles/Backend.css'
import { FaNode , FaJava, FaPhp} from 'react-icons/fa'
import { DiMongodb, DiSqllite } from 'react-icons/di'
import { GrMysql , GrNode} from 'react-icons/gr'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Backend = () => {
    useEffect(()=>{
        Aos.init({duration: 3000});
      }, [])

    return(
        <div className="container-technologies-2" data-aos="fade-up" data-aos-delay="10" >
                <h1 className="h1-technologies-2">Backend</h1>
                <div className="cont-secondary-2">
                <p>Node.js <FaNode className="icon node"/></p>
                <p>MongoDB <DiMongodb className="icon mongo"/></p>
                <p>MySQL <GrMysql className="icon mysql"/></p>
                <p>SQLite <DiSqllite className="icon sqlite"/></p>
                <p>Express <GrNode className="icon express"/></p>
                <p>Java <FaJava className="icon java"/></p>
                <p>PHP <FaPhp className="icon php"/></p>
            </div>
            <div id="projects"></div>
        </div>
    )
}

export default Backend;