import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ id, username, content }) => (
  <div>
    Id: { id } <br />
    User: { username } <br />
    Comment-> { content } <br />
  </div>
);

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Comment;
