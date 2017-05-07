import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment.js';

const setup = () => {
  const props = { username: 'John', content: 'Comment' };

  const enzymeWrapper = shallow(<Comment {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('Comment', () => {
    const { props, enzymeWrapper } = setup();

    it('renders a comment div', () => {
      const div = enzymeWrapper.find('div.comment');

      expect(div).toHaveLength(1);
    });

    describe('username element', () => {
      const username = enzymeWrapper.find('p.comment__username');

      it('renders the element', () => {
        expect(username).toHaveLength(1);
      });

      it('renders the element with the correct value', () => {
        expect(username.text()).toEqual('John says:');
      });
    });

    describe('content element', () => {
      const content = enzymeWrapper.find('p.comment__content');

      it('renders the element', () => {
        expect(content).toHaveLength(1);
      });

      it('renders the element with the correct value', () => {
        expect(content.text()).toEqual('Comment');
      });
    });
  });
});
