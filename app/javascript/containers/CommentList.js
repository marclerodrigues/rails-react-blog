import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';
import Comments from '../components/CommentList';
import CommentForm from './CommentForm';

class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, postId } = this.props;
    dispatch(fetchComments(postId));
  }

  render() {
    const { comments, isFetching, postId } = this.props;

    return (
      <div>
        {isFetching && comments.length === 0 &&
          <h2>Loading...</h2>
        }

        {!isFetching && comments.length === 0 &&
          <h2>No comments.</h2>
        }

        { comments.length > 0 &&
          <Comments
            comments={ comments }
          />
        }

        <CommentForm
          postId={ postId }
        />
      </div>
    );
  }
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { comments } = state;
  const { isFetching, items } = comments || { isFetching: false, items: [] };

  return {
    comments: items,
    isFetching
  };
};

export default connect(mapStateToProps)(CommentList);
