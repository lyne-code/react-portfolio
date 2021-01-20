import React, { Component } from 'react';

class About extends Component {
  render() {

      return (
        <div>
          <meta charSet="utf-8" />
          <title>Contact Me</title>
          {/* bootstrap */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
          {/* css */}
          <link rel="stylesheet" href="styles.css" />
          <header>
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
                    <a className="nav-link" href="index.html">About Me</a>
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
            <h1>Contact Me</h1>
            <hr />
            <form action="mailto:monroelyne@yahoo.com" method="post" encType="text/plain">
              <label>Your Name:</label>
              <input type="text" name="yourName" defaultValue />
              <br /><br />
              <label>Do you want to sign up to the email list?</label>
              <input type="checkbox" name defaultValue />
              <br /><br />
              <label>Email:</label>
              <input type="email" name="yourEmail" defaultValue />
              <br /><br />
              <label>Your Message:</label>
              <br /><br />
              <textarea name="yourMessage" rows={10} cols={30} defaultValue={""} />
              <br /><br />
              <label>OR CALL AT: <strong>555-679-9100!</strong></label>
              <input type="submit" name />
            </form>
            {/*javascript*/}
            <div className="bottom-container">
              <a className="footer-link" href="https://www.linkedin.com/in/lyne-m-79a1b51b8/">LinkedIn</a>
              <a className="footer-link" href="https://github.com/lyne-code">Github</a>
              <a className="footer-link" href="https://www.website.com/">Website</a>
              <p className="copyright">© 2020 Lyne Malele.</p>
            </div>
          </header></div>
      );
    }
  };