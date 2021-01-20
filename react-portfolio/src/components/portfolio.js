import React, { Component } from 'react';

class About extends Component {
  render() {

      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          {/* bootstrap */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
          {/* css */}
          <link rel="stylesheet" href="styles.css" />
          <nav className="navbar navbar-expand-md bg-light navbar-light">
            <a className="navbar-brand" href="#">Lyne J. Malele</a>
            {/*toggle/collapse*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
              <span className="navbar-toggler-icon" />
            </button>
            {/*navlink*/}
            <div className="collapse navbar-collapse" id="Navbar">
              <ul className="navbar-nav ml-auto">
                <li>
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li>
                  <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li>
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <a className="footer-link" href="file:///C:/Users/lynem/Downloads/My%20Resume%202020%20(1).pdf">Click Here To Download My Resume</a>
          <br /><br />
          <div className="weather-project">
            <h2>Weather Dashboard</h2>
            <div className="weather-row">
              <a className="footer-link" href="https://lyne-code.github.io/weather-dashboard/">Link To The Deployed Application</a>
              <br /><br />
              <a className="footer-link" href="https://github.com/lyne-code/weather-dashboard">Link To The Github Repository</a>
              <br /><br />
              <img className="weather" src="weather.png" width="750px" height="350px" />
              <hr /><br /><br />
              <div className="workout-project">
                <h2>Workout Tracker</h2>
                <div className="workout-row">
                  <a className="footer-link" href="https://workout-tracker01.herokuapp.com/?id=5fe956b51102620017eb9b47">Link To The Deployed Application</a>
                  <br /><br />
                  <a className="footer-link" href="https://github.com/lyne-code/workout-tracker">Link To The Github Repository</a>
                  <br /><br />
                  <img className="workout" src="workout.png" width="750px" height="350px" />
                  <hr /><br /><br />
                  <div className="budget-project">
                    <h2>Progressive Budget</h2>
                    <div className="budget-row">
                      <a className="footer-link" href="https://progressive-budget01.herokuapp.com/">Link To The Deployed Application</a>
                      <br /><br />
                      <a className="footer-link" href="https://github.com/lyne-code/progressive-budget/tree/master">Link To The Github Repository</a>
                      <br /><br />
                      <img className="budget" src="budget.png" width="750px" height="350px" />
                    </div>
                  </div>
                  {/*javascript*/}
                  {/* sticky footer*/}
                  <div className="bottom-container">
                    <a className="footer-link" href="https://www.linkedin.com/in/lyne-m-79a1b51b8/">LinkedIn</a>
                    <a className="footer-link" href="https://github.com/lyne-code">Github</a>
                    <a className="footer-link" href="https://www.website.com/">Website</a>
                    <p className="copyright">© 2020 Lyne Malele.</p>
                  </div>
                </div></div></div></div></div>
      );
    }
  };