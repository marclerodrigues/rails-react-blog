import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formattedDate from '../common/formattedDate';

const FullPost = ({ title, content, created_at }) => (
  <div id="white">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <p><img src="assets/user.png" width="50px" height="50px"></img> <ba>Marcle Rodrigues</ba></p>
          <p><bd>{ formattedDate(created_at) }</bd></p>
          <h4>{ title }</h4>
          <p><img className="img-responsive" src="assets/blog01.jpg" alt=""></img></p>
          <div className="post-content">
            <p>{ content }</p>
          </div>
          <br />
          <p><bt>TAGS: <a href="#">Wordpress</a> - <a href="#">Web Design</a></bt></p>
          <hr />
          <p><Link to="/"># Back</Link></p>
        </div>
      </div>
    </div>
  </div>
);

FullPost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  created_at: PropTypes.string
};

export default FullPost;
