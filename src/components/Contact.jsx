import React, { useEffect } from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";
import { FormattedMessage } from 'react-intl'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {

  useEffect(()=>{
    Aos.init({duration: 3000});
  }, [])

  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ljg5iqi",
        "template_aq4jn7d",
        e.target,
        "user_X3BCBEomLmu1ETUEGASOZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  function successMsg(){
  }

  return (
    <div data-aos="zoom-in" data-aos-duration="2000">
      <h1 className="contact-title"   ><FormattedMessage id="app.contact" defaultMessage="Contacto"></FormattedMessage></h1>
      <div>
        <form onSubmit={sendMail} className="form-container">
          <div class="row">

            <div className="col">
              <FormattedMessage id="app.placename" defaultMessage="Nombre...">
                {placeholder=> 
                <input required 
                maxLenght="10" 
                type="text" 
                className="form-control" 
                name="name" 
                placeholder={placeholder}/>}
             </FormattedMessage>
            </div>

            <div className="col">
            <FormattedMessage id="app.placemail" defaultMessage="Email...">
                {placeholder=> 
                <input required 
                maxLenght="25" 
                type="email" 
                className="form-control" 
                name="email" 
                placeholder={placeholder}/>}
             </FormattedMessage>
            </div>
          </div>

          <div className="col pt-5 mx-auto" id="asunto">
           <FormattedMessage id="app.placeasunto" defaultMessage="Asunto...">
                {placeholder=> 
                <input required 
                maxLenght="15" 
                type="text" 
                className="form-control" 
                name="asunto" 
                placeholder={placeholder}/>}
             </FormattedMessage>
          </div>

          <div className="row pt-3 mx-auto">
            <FormattedMessage id="app.placemensaje" defaultMessage="Mensaje...">
              {placeholder => 
              <textarea required 
              cols="30" 
              rows="8" 
              className="form-control" 
              placeholder={placeholder}
              name="message"/>}
            </FormattedMessage>
          </div>

          <div className="col-8 pt-3 mx-auto" style={{ textAlign: "center" }}>
            <FormattedMessage id="app.enviar" defaultMessage="Enviar">
              {value => 
              <input 
              onClick={()=> 
              successMsg()} 
              type="submit" 
              id="btn-cv" 
              className="btn btn-dark" 
              value={value}></input>}
            </FormattedMessage>
          </div>
        </form>
      </div>
    </div>
  );
}
