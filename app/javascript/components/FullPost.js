import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FullPost extends Component {
  render() {
    let { title, content, created_at } = this.props;
    let createdAt = new Date(created_at);

    return (
      <div>
        <Link to='/'>
          Back
        </Link>

        <div className="full-post">
          <h2 className="full-post__title">{ title }</h2>
          <div className="full-post__content">
            { content }
          </div>
          <div className="full-post__details">
            Created at: { createdAt.toString() }
          </div>
        </div>
      </div>
    );
  }
};

export default FullPost;
