import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

const setup = () => {
  const props = {
    id: 1,
    title: 'Post',
    created_at: '2017-05-02T13:05:58.712Z'
  };

  const enzymeWrapper = shallow(<Post {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('Post', () => {
    const { props, enzymeWrapper } = setup();

    it('renders link child', () => {
      const link = enzymeWrapper.find('Link');
      const expectedLinkProps = {
        to: '/1',
        replace: false,
        children: 'Continue Reading...'
      };

      expect(link.props()).toEqual(expectedLinkProps);
    });

    describe('title', () => {
      const title = enzymeWrapper.find('h4');

      it('renders correctly', () => {
        expect(title).toHaveLength(1);
      });

      it('renders the correct text', () => {
        expect(title.text()).toEqual(props.title);
      });
    });

    describe('description', () => {
      const title = enzymeWrapper.find('div.post-description');

      it('renders correctly', () => {
        expect(title).toHaveLength(1);
      });

      it.skip('renders the correct text', () => {
        expect(title.text()).toEqual(props.title);
      });
    });

    describe('created_at', () => {
      const createdAt = enzymeWrapper.find('bd');

      it('renders correctly', () => {
        expect(createdAt).toHaveLength(1);
      });

      it('renders the correct value', () => {
        const date = new Date(props["created_at"]);
        const expectedText = date.toDateString();

        expect(createdAt.text()).toEqual(expectedText);
      });
    });
  });
});
