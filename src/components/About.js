import React, { Component } from "react";
import "../styles/Main.css";

export default class Main extends Component {
  render() {
    return (
      <>
        <div className="aboutSection">
          <h2 className="title">About</h2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr className="hr"></hr>
          <h3 className="caption">Studying Web Development</h3>
          
    <br></br>
    <br></br>
          
          <img className="image" src="https://kadenmaguglin.github.io/kadenmaguglin/img/kd_hwpic.jpg" alt="kade"></img><br></br><br></br>
          <p className="textBody">I'm a Web Developer from Simi Valley, California, studied at UCLA coding bootcamp. Profficient in HTML CSS Javascript Node Express and MYSQL. Check out my portfolio to see some of the projects that I've developed throughout my studies! I love to learn!</p>
    
        </div>
        <br></br>


      </>
    );
  }
}
