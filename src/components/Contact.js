import React, { Component } from "react";
import "../styles/Main.css";

export default class Main extends Component {
  render() {
    return (
      <>
    <div className="contactSection">
          <h2 className="title">Contact</h2>
          
          
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr className="hr"></hr>


          <h3 className="caption">Reach out anytime at the following:</h3>

    <br></br>
    <br></br><br></br><br></br>
          
    <div>

        <div>
          <a href="mailto:kadenmaguglin@gmail.com? subject=subject text" target="#blank">
          <img src="https://i.ibb.co/dfJPB9X/mailerpink100.jpg" className="contactPic" alt="contactpic"></img>
          <p className="contactLink">&nbsp; &nbsp;kadenmaguglin@gmail.com</p>
          </a>
        </div><br></br><br></br><br></br><br></br><br></br><br></br>
        <div>
          <a href="https://github.com/kadenmaguglin" target="#blank">
          <img src="https://i.ibb.co/X5Mv8K8/githubpink100.jpg" className="contactPic" alt="contactpic"></img>
          <p className="contactLink">&nbsp; &nbsp;kadenmaguglin</p>
          </a>
        </div><br></br><br></br><br></br><br></br><br></br><br></br>
        <div>
          <a href="https://www.instagram.com/oldmankade/" target="#blank">
          <img src="https://i.ibb.co/0qVNJ40/instapink100.jpg" className="contactPic" alt="contactpic"></img>
          <p className="contactLink">&nbsp; &nbsp;@oldmankade</p>
          </a>
        </div><br></br><br></br><br></br><br></br>

    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      </>
    );
  }
}

