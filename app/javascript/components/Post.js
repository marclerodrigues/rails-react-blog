import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import FullPost from './FullPost';
import formattedDate from '../common/formattedDate';

const Post = ({ id, title, created_at }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-lg-offset-2">
        <p>
          <img src="/assets/user.png" width="50px" height="50px"></img> <ba>Marcle Rodrigues</ba>
        </p>
        <p><bd>{ formattedDate(created_at) }</bd></p>
        <h4>{ title }</h4>
        <div className="post-description">
          <p><b>Spider-Man</b> is a fictional character, a comic book superhero that appears in comic books published by Marvel Comics. Created by writer-editor Stan Lee and writer-artist Steve Ditko, he first appeared in Amazing Fantasy #15 (cover-dated Aug. 1962). </p>
          <p>Lee and Ditko conceived the character as an orphan being raised by his Aunt May and Uncle Ben, and as a teenager, having to deal with the normal struggles of adolescence in addition to those of a costumed crimefighter.</p>
        </div>
        <p>
          <Link to={`/${id}`}>Continue Reading...</Link>
        </p>
      </div>
    </div>
  </div>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired
};

export default Post;
