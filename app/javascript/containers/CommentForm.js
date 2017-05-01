import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../actions';
import Form from '../components/CommentForm';
import $ from 'jquery';

class CommentForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = $(event.target);
    const { dispatch } = this.props;
    dispatch(createComment(form.serialize()));
  }

  render() {
    const { comment, isCreating, postId } = this.props;

    return (
      <div>
        { isCreating && !comment &&
          <h2>Creating...</h2>
        }

        { !isCreating && comment &&
          <Form
            handleSubmit={ this.handleSubmit.bind(this) }
            postId={ postId }
          />
        }
      </div>
    );
  }
};

CommentForm.propTypes = {
  postId: PropTypes.number,
  comment: PropTypes.object.isRequired,
  isCreating: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { comment } = state;
  const { isCreating, item } = comment || { isFetching: false, item: {} };

  return {
    comment: item,
    isCreating
  };
};

export default connect(mapStateToProps)(CommentForm);
