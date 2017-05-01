import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ postId, handleSubmit }) => (
  <div>
    <form onSubmit={ e => handleSubmit(e) }>
      <h3>New Comment</h3>
      <label>Username:</label>
      <input type="text" name="username" id="username" required />
      <label>Comment:</label>
      <input type="text" name="content" id="content" required />
      <input type="hidden" name="post_id" value={ postId } />
      <input type="submit" value="Create" />
    </form>
  </div>
);

CommentForm.propTypes = {
  postId: PropTypes.number,
  handleSubmit: PropTypes.func.isRequired
};

export default CommentForm;
