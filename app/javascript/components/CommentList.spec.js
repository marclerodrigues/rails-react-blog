import React from 'react';
import { shallow } from 'enzyme';
import CommentList from './CommentList';

const setup = () => {
  const comments = [
    { id: 1, username: 'John', content: 'Comment 1' },
    { id: 2, username: 'Doe', content: 'Comment 2' }
  ];
  const props = {
    comments
  };

  const enzymeWrapper = shallow(<CommentList {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('CommentList', () => {
    const { props, enzymeWrapper } = setup();

    it('renders a comments list div', () => {
      const div = enzymeWrapper.find('div.comments-list');

      expect(div).toHaveLength(1);
    });

    describe('head element', () => {
      const head = enzymeWrapper.find('h3.comments-list__head');

      it('renders correctly', () => {
        expect(head).toHaveLength(1);
      });

      it('renders with the correct value', () => {
        expect(head.text()).toEqual('Comments (2)');
      });
    });

    describe('Comment chidren', () => {
      const comments = enzymeWrapper.find('Comment');

      it('renders the correct amount of children', () => {
        expect(comments).toHaveLength(2);
      });

      it('renders the first comment with the correct props', () => {
        const expectedProps = {
          id: 1,
          username: 'John',
          content: 'Comment 1'
        };

        expect(comments.first().props()).toEqual(expectedProps);
      });

      it('renders the second comment with the correct props', () => {
        const expectedProps = {
          id: 2,
          username: 'Doe',
          content: 'Comment 2'
        };

        expect(comments.last().props()).toEqual(expectedProps);
      });
    });
  });
});
