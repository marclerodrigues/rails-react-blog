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
        className: 'btn btn-primary',
        replace: false,
        children: 'Read post'
      };

      expect(link.props()).toEqual(expectedLinkProps);
    });

    describe('title', () => {
      const title = enzymeWrapper.find('h3');

      it('renders the correct class', () => {
        expect(title.hasClass('pull-left')).toBe(true);
      });

      it('renders the correct text', () => {
        expect(title.text()).toEqual(props.title);
      });
    });

    describe('created_at', () => {
      const created_at = enzymeWrapper.find('span');

      it('renders the correct classes', () => {
        expect(created_at.hasClass('label')).toBe(true);
        expect(created_at.hasClass('label-default')).toBe(true);
      });

      it('renders the correct value', () => {
        const date = new Date(props["created_at"]);
        const expectedText = date.toDateString();

        expect(created_at.text()).toEqual(expectedText);
      });
    });
  });
});
