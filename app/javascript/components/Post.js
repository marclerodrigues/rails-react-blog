import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import FullPost from './FullPost';

const formattedDate = date => {
  const formatted = new Date(date);
  return formatted.toDateString();
};

const Post = ({ id, title, created_at }) => (
  <div className="panel post-panel">
    <div className="panel-heading">
      <div className="text-center">
        <div className="row">
          <div className="col-sm-9">
            <h3 className="pull-left">{ title }</h3>
          </div>
          </div>
        </div>
    </div>

    <div className="panel-body">
      <Link to={ `/${id}` } className="btn btn-primary" >
        Read post
      </Link>
    </div>

    <div className="panel-footer">
      <span className="label label-default">{ formattedDate(created_at) }</span>
    </div>
  </div>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired
};

export default Post;
