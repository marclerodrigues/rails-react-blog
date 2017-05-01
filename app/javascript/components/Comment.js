import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ username, content }) => (
  <div className="comment">
    <p className="comment__username">
      { username } says:
    </p>
    <p className="comment__content">
      { content }
    </p>
  </div>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Comment;
