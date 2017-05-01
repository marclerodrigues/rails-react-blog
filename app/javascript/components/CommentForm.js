import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ postId, handleSubmit }) => (
  <div className="comment-form">
    <form onSubmit={ e => handleSubmit(e) }>
      <h3>New Comment</h3>
      <div className="form-group">
        <label className="comment-form__label">Username:</label>
        <input className="form-control" type="text" name="username" id="username" required />
      </div>
      <div className="form-group">
        <label className="comment-form__label">Comment:</label>
        <input className="form-control" type="text" name="content" id="content" required />
      </div>
      <input type="hidden" name="post_id" value={ postId } />
      <input type="submit" value="Create" className="btn btn-success" />
    </form>
  </div>
);

CommentForm.propTypes = {
  postId: PropTypes.number,
  handleSubmit: PropTypes.func.isRequired
};

export default CommentForm;
