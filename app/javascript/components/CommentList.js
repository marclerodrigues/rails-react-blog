import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div className="comments_list">
    { comments.map( comment =>
      <Comment
        key={ comment.id }
        { ...comment }
      />
    ) }
  </div>
);

const commentShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}).isRequired;

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentShape).isRequired,
};

export default CommentList;
