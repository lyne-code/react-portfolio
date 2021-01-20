import React, { Component } from 'react';

class About extends Component {
  render() {

      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Responsive Portfolio</title>
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
            {/*intro*/}
            <table cellSpacing={20}>
              <tbody><tr>
                  <td><img className="profile-picture" src="LYNE.JPG" alt="Lyne in blazer dress" height="300px" width="270px" /></td>
                  <td>  <h1>Lyne Malele</h1>
                    <p>
                      <em>Full Stack Software Developer | Digital Fitness Entrepreneur</em>
                      <br /><br />
                      I am a Full Stack web developer and self-proclaimed <a href="https://i.pinimg.com/originals/b6/7f/66/b67f66e9c468051a2a11b95e8e0a60b6.jpg">dessert connoisseur.</a>
                    </p></td>
                </tr>
              </tbody></table>
            <br />
            <p>
              Driven by my passion for fitness, I managed the UFC gym at age 18
              and later became the founder and CTO of <em><strong>Thrive</strong></em>
              —an online therapy application with an emphasis on physical fitness, eating disorders, depression, anxiety, addictions and mental health problems—by age 21.
            </p>
            <br /><br /><hr />
            <div className="skills">
              <h2>My Skills.</h2>
              <div className="skill-row">
                <img className="multi-task" src="https://luna1.co/020fe1.png" alt="" />
                <h3>Web Development | Project Management | Product Development</h3>
                <p>As the <strong>manager of the UFC Gym</strong> I managed, directed and prioritized the gym's operational budget and worked diligently to attain the monthly revenue goals.
                  I directed the hiring, training, and scheduling of all Operational gym associates, as well as managed, monitored and evaluated their performance with a staff total of 25+.
                  I worked to provide strategic, operational, and fical leadership while working to reach the company's long-term goals and maintain the organizational vision.</p>
                <br /><br />
              </div>
              <div className="skill-row">
                <img className="thriveimg" src="https://static.dribbble.com/users/326500/screenshots/2112661/thrive_1x.jpg" alt="Thrive" />
                <h3>JavaScript | APIs | Python</h3>
                <p>As the <strong>founder and CTO of <em>Thrive</em></strong> I contribute to the increase of our company’s competitive advantage through the effective use and
                  application of the latest and most effective technology. I make executive decisions regarding our company’s technological needs. I protect sensitive digital
                  information and monitor system infrastructure, Key Performance Indicators and metrics.</p>
              </div>
              <hr />
              <div className="contact-me">
                <br />
                <h2>Get In Touch</h2>
                <h5>For all your Web Development and Therapy needs.</h5>
                <p className="contact-msg">Reach out, or simply follow us on our social media accounts. Visit our website to stay in the loop on all things <em><strong>Thrive!</strong></em></p>
              </div>
              {/*javascript*/}
              <div className="bottom-container">
                <a className="footer-link" href="https://www.linkedin.com/in/lyne-m-79a1b51b8/">LinkedIn</a>
                <a className="footer-link" href="https://github.com/lyne-code">Github</a>
                <a className="footer-link" href="https://www.website.com//">Website</a>
                <p className="copyright">© 2020 Lyne Malele.</p>
              </div>
            </div></header></div>
      );
    }
  };