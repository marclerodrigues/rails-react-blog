import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <div className="posts_list">
    { posts.map( post =>
      <Post
        key={ post.id }
        { ...post }
      />
    ) }
  </div>
);

const postShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired;

PostList.propTypes = {
  posts: PropTypes.arrayOf(postShape).isRequired,
};

export default PostList;
