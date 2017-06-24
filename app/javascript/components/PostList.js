import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const postContainerId = index => (
  (index % 2 === 0) ? 'grey' : 'white'
);

const PostList = ({ posts }) => (
  <div className="post-list">
    {
      posts.map((post, index) => (
        <div id={ postContainerId(index) } className="post" key={index}>
          <Post
            key={ post.id }
            { ...post }
          />
        </div>
      ))
    }
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
