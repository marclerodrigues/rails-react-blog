import reducer from './posts';
import * as types from '../actions';

describe('posts reducer', () => {
  const commentInitialState = { isCreating: false, item: {} };
  const commentsInitialState = { isFetching: false, items: [] };
  const postInitialState = { favorites: [], isFetching: false, post: {} };
  const postsInitialState = { isFetching: false, items: [] };

  let initialState = {
    comment: commentInitialState,
    comments: commentsInitialState,
    post: postInitialState,
    posts: postsInitialState
  };

  it('returns the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('handles RECEIVE_POST', () => {
    let postItem = { id: 1 };
    let expectedState = {
      post: { favorites: [], isFetching: false, post: postItem },
      comment: commentInitialState,
      comments: commentsInitialState,
      posts: postsInitialState
    };

    expect(
      reducer(initialState, {
        type: types.RECEIVE_POST,
        post: postItem
      })
    ).toEqual(expectedState);
  });

  it('handles REQUEST_POST', () => {
    let expectedState = {
      post: { favorites: [], isFetching: true, post: {} },
      comment: commentInitialState,
      comments: commentsInitialState,
      posts: postsInitialState
    };

    expect(
      reducer(initialState, {
        type: types.REQUEST_POST
      })
    ).toEqual(expectedState);
  });

  it('handles MARK_AS_FAVORITE', () => {
    let postItem = { id: 1 };
    let expectedState = {
      post: { favorites: [postItem], isFetching: false, post: {} },
      comment: commentInitialState,
      comments: commentsInitialState,
      posts: postsInitialState
    };

    expect(
      reducer(initialState, {
        type: types.MARK_AS_FAVORITE,
        post: postItem
      })
    ).toEqual(expectedState);
  });

  it('handles REQUEST_POSTS', () => {
    let expectedState = {
      post: postInitialState,
      comment: commentInitialState,
      comments: commentsInitialState,
      posts: { isFetching: true, items: [] }
    };

    expect(
      reducer(initialState, {
        type: types.REQUEST_POSTS
      })
    ).toEqual(expectedState);
  });

  it('handles RECEIVE_POSTS', () => {
    let postItems = [{ id: 1 }, { id: 2 }];
    let expectedState = {
      post: postInitialState,
      comment: commentInitialState,
      comments: commentsInitialState,
      posts: { isFetching: false, items: postItems }
    };

    expect(
      reducer(initialState, {
        type: types.RECEIVE_POSTS,
        posts: postItems
      })
    ).toEqual(expectedState);
  });

  it('handles REQUEST_COMMENTS', () => {
    let expectedState = {
      post: postInitialState,
      comment: commentInitialState,
      comments: { isFetching: true, items: [] },
      posts: postsInitialState
    };

    expect(
      reducer(initialState, {
        type: types.REQUEST_COMMENTS
      })
    ).toEqual(expectedState);
  });

  it('handles RECEIVE_COMMENTS', () => {
    let commentItems = [{ title: '1' }, { title: '2'}];
    let expectedState = {
      post: postInitialState,
      comment: commentInitialState,
      comments: { isFetching: false, items: commentItems },
      posts: postsInitialState
    };

    expect(
      reducer(initialState, {
        type: types.RECEIVE_COMMENTS,
        comments: commentItems
      })
    ).toEqual(expectedState);
  });

  it('handles NEW_COMMENT_REQUEST', () => {
    let expectedState = {
      post: postInitialState,
      comment: { isCreating: true, item: {} },
      comments: commentsInitialState,
      posts: postsInitialState
    };

    expect(
      reducer(initialState, {
        type: types.NEW_COMMENT_REQUEST
      })
    ).toEqual(expectedState);
  });

  it('handles NEW_COMMENT_SUCCESS', () => {
    let newComment = { title: '3' };
    let expectedState = {
      post: postInitialState,
      comment: { isCreating: false, item: newComment },
      comments: { isFetching: false, items: [newComment] },
      posts: postsInitialState
    };

    expect(
      reducer(initialState, {
        type: types.NEW_COMMENT_SUCCESS,
        comment: newComment
      })
    ).toEqual(expectedState);
  });
});
