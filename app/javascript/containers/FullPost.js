import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost, markPost } from '../actions';
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

  handleFavorite(event) {
    event.preventDefault();
    const { dispatch, post } = this.props;
    dispatch(markPost(post));
  }

  render() {
    const { post, isFetching, favorites } = this.props;
    const favorited = favorites.filter(fav => fav.id === post.id);

    return (
      <div>
        { post &&
          <Post
            key={post.id}
            { ...post }
          />
        }

        { post && favorited.length === 0 &&
          <a
            href="#"
            onClick={ event => this.handleFavorite(event)}
          >
            Mark as Favorite
          </a>
        }

        { post && favorited.length > 0 &&

          <p>Marked as Favorite</p>

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
  const { isFetching, post: item, favorites } = post || { isFetching: false, post: {}, favorites: [] };

  return {
    post: item,
    isFetching,
    favorites
  };
};

export default connect(mapStateToProps)(FullPost);
