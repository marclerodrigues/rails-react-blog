import * as actions from './index';
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe('actions', () => {
  describe('sync', () => {
    describe('returns the correct action when', () => {
      it('requests a post', () => {
        const id = 1;
        const expectedAction = { type: actions.REQUEST_POST, id };

        expect(actions.requestPost(id)).toEqual(expectedAction);
      });

      it('receives a post', () => {
        const json = { data: {} };
        const expectedAction = { type: actions.RECEIVE_POST, post: json.data };

        expect(actions.receivePost(json)).toEqual(expectedAction);
      });

      it('requests posts', () => {
        const expectedAction = { type: actions.REQUEST_POSTS };

        expect(actions.requestPosts()).toEqual(expectedAction);
      });

      it('receives posts', () => {
        const posts = { data: {} };
        const expectedAction = { type: actions.RECEIVE_POSTS, posts: posts.data };

        expect(actions.receivePosts(posts)).toEqual(expectedAction);
      });

      it('requests comments', () => {
        const postId = 1;
        const expectedAction = { type: actions.REQUEST_COMMENTS, postId };

        expect(actions.requestComments(postId)).toEqual(expectedAction);
      });

      it('receives comments', () => {
        const comments = { data: {} };
        const expectedAction = { type: actions.RECEIVE_COMMENTS, comments: comments.data };

        expect(actions.receiveComments(comments)).toEqual(expectedAction);
      });

      it('requests new comment', () => {
        const expectedAction = { type: actions.NEW_COMMENT_REQUEST };

        expect(actions.newCommentRequest()).toEqual(expectedAction);
      });

      it('requests new comment success', () => {
        const comment = { data: {} };
        const expectedAction = { type: actions.NEW_COMMENT_SUCCESS, comment: comment.data };

        expect(actions.newCommentSuccess(comment)).toEqual(expectedAction);
      });

      it('marks as favorite', () => {
        const expectedAction = { type: actions.MARK_AS_FAVORITE, post: {} };

        expect(actions.markAsFavorite({})).toEqual(expectedAction);
      });
    });
  });

  describe('async', () => {
    const middlewares = [ thunk ];
    const mockedStore = mockStore(middlewares);
    const axiosMock = new mockAdapter(axios);

    it('creates RECEIVE_POSTS when fetching posts has been done', () => {
      const posts = ['post'];

      const expectedActions = [
        { type: actions.REQUEST_POSTS },
        { type: actions.RECEIVE_POSTS, posts: posts }
      ];

      axiosMock.onGet('/?format=json')
        .reply(200, posts);

      const store = mockedStore({ posts: [] });

      return store.dispatch(actions.fetchPosts())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates RECEIVE_POST when fetch post has been done', () => {
      const post = { id: 1 };

      const expectedActions = [
        { type: actions.REQUEST_POST, id: post.id },
        { type: actions.RECEIVE_POST, post }
      ];

      axiosMock.onGet('/post/1.json')
        .reply(200, post);

      const store = mockedStore({ post: {} });

      return store.dispatch(actions.fetchPost(post.id))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('creates RECEIVE_COMMENTS when fetch comments has been done', () => {
      const postId = 1;
      const comments = ['comment'];

      const expectedActions = [
        { type: actions.REQUEST_COMMENTS, postId },
        { type: actions.RECEIVE_COMMENTS, comments: comments }
      ];

      axiosMock.onGet('/comment.json?post_id=1')
        .reply(200, comments);

      const store = mockedStore({ comments: [] });

      return store.dispatch(actions.fetchComments(postId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates NEW_COMMENT_SUCCESS when creating comment has been done', () => {
      const comment = { title: 'comment', content: 'comment' };

      const expectedActions = [
        { type: actions.NEW_COMMENT_REQUEST },
        { type: actions.NEW_COMMENT_SUCCESS, comment }
      ];

      axiosMock.onPost('/comment')
        .reply(200, comment);

      const store = mockedStore({ comment: {} });

      return store.dispatch(actions.createComment(comment))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
