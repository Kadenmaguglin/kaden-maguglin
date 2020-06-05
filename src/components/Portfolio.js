import React, { Component } from "react";
import "../styles/Main.css";

export default class Main extends Component {
  render() {
    return (
      <>
   <div className="portfolioSection">
          <h2 className="title">Portfolio</h2>


    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr className="hr"></hr>


          <h3 className="caption">Projects completed during UCLA coding bootcamp 2020</h3>


    <br></br>
    <br></br>


    <div className="projectContainer">
            <p className="projectTitle">BrewLOVE brewery locator</p>
            <a href="https://brew-app.github.io/BREWLOVE-APP/#jokeBtn" target="#blank"><img className="projectThumbnail" alt="pic" src="https://kadenmaguglin.github.io/kadenmaguglin/bl_hwpic.JPG"></img></a>
            <p className="textBody">A application used to find breweries based off of your zipcode! Using the google maps api, zipcode api, and openbrewery api to pull information, as well as zurb foundation css framework,
                HTML, CSS, jquery and javascript.</p>
          </div><br></br><br></br><br></br><br></br>

          <div className="projectContainer">
            <p className="projectTitle">Quarantine Chatterbox chat application</p>
            <a href="https://brew-app.github.io/BREWLOVE-APP/#jokeBtn" target="#blank">
            <img className="projectThumbnail" alt="pic" src="https://kadenmaguglin.github.io/kadenmaguglin/qc_hwpic.JPG"></img>
            </a>
            <p className="textBody">Due to 2020's quarantine, we decided to develop an application using node express and javascript to pull news articles
              from a news api, and integrated a log in / sign up and chat box feature using a custom MYSQL database.
            </p>
          </div><br></br><br></br><br></br><br></br>

          <div className="projectContainer">
            <p className="projectTitle">Password Generator</p>
            <a href="https://brew-app.github.io/BREWLOVE-APP/#jokeBtn" target="#blank">
            <img className="projectThumbnail" alt="pic" src="https://kadenmaguglin.github.io/kadenmaguglin/pw_hwpic.JPG"></img>
            </a>
            <p className="textBody">A simple password generator created with HTML CSS and Javascript, capable of generating passwords with an inputed criteria!</p>
          </div><br></br><br></br><br></br><br></br>

          <div className="projectContainer">
            <p className="projectTitle">Code Quiz</p>
            <a href="https://brew-app.github.io/BREWLOVE-APP/#jokeBtn" target="#blank">
            <img className="projectThumbnail" alt="pic" src="https://kadenmaguglin.github.io/kadenmaguglin/cq_hwpic.JPG"></img>
            </a>
            <p className="textBody">A quiz made using javascript and jquery, test your knowledge on the three pillars of web design - HTML CSS and Javascript.</p>
          </div><br></br><br></br><br></br><br></br>

          <div className="projectContainer">
            <p className="projectTitle">Weather Map</p>
            <a href="https://brew-app.github.io/BREWLOVE-APP/#jokeBtn" target="#blank">
            <img className="projectThumbnail" alt="pic" src="https://kadenmaguglin.github.io/kadenmaguglin/wm_hwpic.JPG"></img>
            </a>
            <p className="textBody">Using openweather DB, enter the name of a city to find the current weather. Created using javascript, CSS and HTML.</p>
          </div><br></br><br></br><br></br><br></br>

          

        </div>
        <br></br>
        <script type="text/javascript">
          console.log("froggy.")
        </script>
      </>
    );
  }
}
