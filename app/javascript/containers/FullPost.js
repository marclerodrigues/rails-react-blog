import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import Post from '../components/FullPost.js';
import CommentList from './CommentList';

class FullPost extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchPost(match.params.id));
  }

  render() {
    const { post, isFetching } = this.props;

    return (
      <div>
        { post &&
          <Post
            key={post.id}
            { ...post }
          />
        }

        { !isFetching && post &&
          <CommentList
            postId={post.id}
          />
        }
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { post } = state;
  const { isFetching, post: item } = post || { isFetching: false, post: {} };

  return {
    post: item,
    isFetching
  };
};

export default connect(mapStateToProps)(FullPost);
