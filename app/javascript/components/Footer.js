import React from 'react';
import { Route, Link } from 'react-router-dom';

const Footer = () => (
  <div id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 my-address">
          <h4>My Bunker</h4>
          <p>
            Some Address 987,<br/>
            +34 9054 5455, <br/>
            Teresina - PI, Brazil.
          </p>
        </div>

        <div className="col-lg-4 social-links">
          <h4>My Links</h4>
          <p>
            <a href="#">Linkedin</a><br/>
            <a href="#">Twitter</a><br/>
            <a href="#">Facebook</a>
          </p>
        </div>

        <div className="col-lg-4 about-me">
          <h4>About Me</h4>
          <p>This cute theme was created to showcase your work in a simple way. Use it wisely.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
