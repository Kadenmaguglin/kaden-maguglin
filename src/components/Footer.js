import React, { Component } from 'react';
import "../styles/Footer.css";

export default class Header extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Portfolio by KADEN MAGUGLIN</p>
        <p>github: kadenmaguglin</p>
        <p>instagram: <a href="https://www.instagram.com/oldmankade">@oldmankade</a></p>
        <p>twitter: <a href="https://twitter.com/kondymagondy">@kondymagondy</a></p>
      </footer>
    )
  }
}
