import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar navbar-inverse navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to="/" className="navbar-brand">MY BLOG</Link>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><a href="about.html">About</a></li>
          <li><a href="blog.html">Projects</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
