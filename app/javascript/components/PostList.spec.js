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

    it('renders a container div', () => {
      const container = enzymeWrapper.find('div.container');

      expect(container).toHaveLength(1);
    });

    it('renders a row div', () => {
      const row = enzymeWrapper.find('div.row');

      expect(row).toHaveLength(1);
    });

    it('renders two medium columns with width of 3', () => {
      const mediumColumns = enzymeWrapper.find('div.col-md-3');

      expect(mediumColumns).toHaveLength(2);
    });

    it('renders a medium column with with of 6', () => {
      const mediumColumn = enzymeWrapper.find('div.col-md-6');

      expect(mediumColumn).toHaveLength(1);
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
