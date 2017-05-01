import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const NEW_COMMENT_REQUEST = 'NEW_COMMENT_REQUEST';
export const NEW_COMMENT_SUCCESS = 'NEW_COMMENT_SUCCESS';

export const MARK_AS_FAVORITE = 'MARK_AS_FAVORITE';

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

export function requestComments(postId) {
  return {
    type: REQUEST_COMMENTS,
    postId
  };
};

export function receiveComments(json) {
  return {
    type: RECEIVE_COMMENTS,
    comments: json.data
  };
};

export function newCommentRequest() {
  return {
    type: NEW_COMMENT_REQUEST
  };
};

export function newCommentSuccess(json) {
  return {
    type: NEW_COMMENT_SUCCESS,
    comment: json.data
  };
};

export function markAsFavorite(post) {
  return {
    type: MARK_AS_FAVORITE,
    post
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

export function fetchComments(postId) {
  return dispatch => {
    dispatch(requestComments(postId));

    return axios.get(`/comment.json?post_id=${postId}`)
      .then(response => dispatch(receiveComments(response)));
  };
};

export function createComment(comment) {
  return dispatch => {
    dispatch(newCommentRequest());

    return axios.post('/comment', comment)
      .then(response => dispatch(newCommentSuccess(response)));
  };
};

export function markPost(post) {
  return dispatch => dispatch(markAsFavorite(post));
};
