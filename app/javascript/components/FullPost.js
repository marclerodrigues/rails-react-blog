import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FullPost extends Component {
  render() {
    let { title, content, created_at } = this.props;
    let createdAt = new Date(created_at);

    return (
      <div>
        <Link to='/' className="btn btn-primary">
          Back to Post List
        </Link>

        <div className="full-post">
          <h2 className="full-post__title">{ title }</h2>
          <h3 className="full-post__date">
            { createdAt.toDateString() }
          </h3>
          <div className="full-post__content">
            { content }
          </div>
        </div>
      </div>
    );
  }
};

export default FullPost;
