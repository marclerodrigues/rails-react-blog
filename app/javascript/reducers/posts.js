import { combineReducers } from 'redux';

import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REQUEST_POSTS,
  REQUEST_POST
  } from '../actions';

function post(state = { isFetching: false, post: {} }, action) {
  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state,
        {
          isFetching: false,
          post: action.post
        }
      );
    case REQUEST_POST:
      return Object.assign({}, state, { isFetching: true, post: {} });
    default:
      return state;
  };
}

function posts(state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state,
        {
          isFetching: false,
          items: action.posts
        }
      );
    case REQUEST_POSTS:
      return Object.assign({}, state, { isFetching: true, items: [] });
    default:
      return state;
  };
};


const rootReducer = combineReducers({
  post,
  posts
});

export default rootReducer;
