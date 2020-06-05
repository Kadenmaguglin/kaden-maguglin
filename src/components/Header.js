import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
        <h1 className = "head">Kaden Maguglin</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
        <p className = "subtitle">JUNIOR FULL STACK WEB DEVELOPER</p>
        <br></br>
        <p className = "subtitle">HTML CSS JS NODE REACT</p>
        </div>
      </div>
    )
  }
}
