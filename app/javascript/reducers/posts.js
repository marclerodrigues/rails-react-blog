import { combineReducers } from 'redux';

import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REQUEST_POSTS,
  REQUEST_POST,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  NEW_COMMENT_REQUEST,
  NEW_COMMENT_SUCCESS,
  MARK_AS_FAVORITE
  } from '../actions';

function post(state = { isFetching: false, post: {}, favorites: [] }, action) {
  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, { isFetching: false, post: action.post });
    case REQUEST_POST:
      return Object.assign({}, state, { isFetching: true, post: {} });
    case MARK_AS_FAVORITE:
      return Object.assign({}, state, { favorites: state.favorites.concat(action.post) } );
    default:
      return state;
  };
}

function posts(state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, { isFetching: false, items: action.posts });
    case REQUEST_POSTS:
      return Object.assign({}, state, { isFetching: true, items: [] });
    default:
      return state;
  };
};

function comments(state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, { isFetching: false, items: action.comments });
    case REQUEST_COMMENTS:
      return Object.assign({}, state, { isFetching: true, items: [] });
    case NEW_COMMENT_SUCCESS:
      return Object.assign({}, state, { isFetching: false, items: state.items.concat(action.comment) });
    default:
      return state;
  };
};

function comment(state = { isCreating: false, item: {} }, action) {
  switch (action.type) {
    case NEW_COMMENT_REQUEST:
      return Object.assign({}, state, { isCreating: true, item: {} });
    case NEW_COMMENT_SUCCESS:
      return Object.assign({}, state, { isCreating: false, item: action.comment });
    default:
      return state;
  };
};


const rootReducer = combineReducers({
  post,
  posts,
  comments,
  comment
});

export default rootReducer;
