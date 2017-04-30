import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import FullPost from './FullPost';

const Post = ({ id, title }) => (
  <div className="post">
    <span className="post__title">{ title }</span>
    <Link to={ `${id}` }>
      Read Post
    </Link>
  </div>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Post;
