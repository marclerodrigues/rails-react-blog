import React from 'react';
import { shallow } from 'enzyme';
import PostList from './PostList.js';

const setup = () => {
  const posts = [
    { id: 1, title: '1', created_at: '2017-05-02T13:05:58.712Z' },
    { id: 2, title: '2', created_at: '2017-05-02T13:05:58.712Z' }
  ];
  const props = {
    posts
  };

  const enzymeWrapper = shallow(<PostList { ...props } />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('PostList', () => {
    const { props, enzymeWrapper } = setup();

    it('renders a post list div', () => {
      const container = enzymeWrapper.find('div.post-list');

      expect(container).toHaveLength(1);
    });

    it('renders two post div', () => {
      const posts = enzymeWrapper.find('div.post');

      expect(posts).toHaveLength(2);
    });

    it('renders post div with a grey id', () => {
      const post = enzymeWrapper.find('div#grey');

      expect(post).toHaveLength(1);
    });

    it('renders post div with a white id', () => {
      const post = enzymeWrapper.find('div#white');

      expect(post).toHaveLength(1);
    });

    describe('children components', () => {
      const posts = enzymeWrapper.find('Post');

      it('renders the correct amount of posts', () => {
        expect(posts).toHaveLength(2);
      });

      it('renders first post with the correct props', () => {
        const expectedProps = { id: 1, title: '1', created_at: '2017-05-02T13:05:58.712Z' };

        expect(posts.first().props()).toEqual(expectedProps);
      });

      it('renders second post with the correct props', () => {
        const expectedProps = { id: 2, title: '2', created_at: '2017-05-02T13:05:58.712Z' };

        expect(posts.last().props()).toEqual(expectedProps);
      });
    });
  });
});
