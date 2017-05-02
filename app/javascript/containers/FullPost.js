import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost, markAsFavorite } from '../actions';
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
    dispatch(markAsFavorite(post));
  }

  render() {
    const { post, isFetching, favorites } = this.props;
    const favorited = favorites.filter(fav => fav.id === post.id);

    return (
      <div className="container">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          { post &&
            <Post
              key={post.id}
              { ...post }
            />
 }
          <hr />
          <div className="post-action">
            { post && favorited.length === 0 &&
              <a
                href="#"
                className="btn btn-success post-action__mark"
                onClick={ event => this.handleFavorite(event)}
              >
                Mark Post as Favorite
              </a>
            }

            { post && favorited.length > 0 &&
              <p className="post-action__marked">
                <span className="glyphicon glyphicon-ok"></span> Marked as Favorite
              </p>
            }
          </div>

          { !isFetching && post &&
            <CommentList
              postId={post.id}
            />
          }
        </div>
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
