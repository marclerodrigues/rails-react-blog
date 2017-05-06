import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        { posts.map( post =>
          <Post
            key={ post.id }
            { ...post }
          />
         ) }
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
);

const postShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired
}).isRequired;

PostList.propTypes = {
  posts: PropTypes.arrayOf(postShape).isRequired,
};

export default PostList;
