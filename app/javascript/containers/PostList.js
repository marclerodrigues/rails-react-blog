import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Posts from '../components/PostList.js';

class PostList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  render() {
    const { posts, isFetching } = this.props;

    return (
      <div>
        {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
        }

        {!isFetching && posts.length === 0 &&
          <h2>Empty</h2>
        }

        { posts.length > 0 &&
          <Posts
            posts={ posts }
          />
        }
      </div>
    );
  }
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { posts } = state;
  const { isFetching, items } = posts || { isFetching: false, items: [] };

  return {
    posts: items,
    isFetching
  };
};

export default connect(mapStateToProps)(PostList);
