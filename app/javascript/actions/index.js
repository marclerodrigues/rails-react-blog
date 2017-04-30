import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

export function requestPosts() {
  return {
    type: REQUEST_POSTS
  };
};

export function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data
  };
};

export function requestPost(id) {
  return {
    type: REQUEST_POST,
    id
  };
}

export function receivePost(json) {
  return {
    type: RECEIVE_POST,
    post: json.data
  };
};

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts());

    return axios.get('/?format=json')
      .then(response => dispatch(receivePosts(response)));
  };
}

export function fetchPost(id) {
  return dispatch => {
    dispatch(requestPost(id));

    return axios.get(`/post/${id}.json`)
      .then(response => dispatch(receivePost(response)));
  };
};
