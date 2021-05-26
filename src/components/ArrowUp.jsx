import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import '../styles/ArrowUp.css'

class ArrowUp extends React.Component {

  render() {

    function scrollUp(){
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if(currentScroll > 0){
        window.scrollTo (0, 0);
      }
    }

    window.onscroll = function (){
      var scroll = document.documentElement.scrollTop;

      try {
        if(scroll > 100){
          document.getElementById('up-container').style.transform = 'scale(1)'
        }else if(scroll < 100){
          document.getElementById('up-container').style.transform = 'scale(0)'
        }
      } catch (error) {
      }
    }

    return (
      <React.Fragment>
        <div id="up-container" >
        <div className="up-back">
          <button id="up" onClick={scrollUp}>
            <FaArrowAltCircleUp />
          </button>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ArrowUp
