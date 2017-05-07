import React from 'react';
import { shallow } from 'enzyme';
import FullPost from './FullPost';

const setup = () => {
  const props = {
    title: 'Post',
    content: 'Post Content',
    created_at: '2017-05-02T13:05:58.712Z'
  };

  const enzymeWrapper = shallow(<FullPost {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('FullPost', () => {
    const { props, enzymeWrapper } = setup();

    it('renders full post div', () => {
      const div = enzymeWrapper.find('div.full-post');

      expect(div).toHaveLength(1);
    });

    describe('Title element', () => {
      const title = enzymeWrapper.find('h2');

      it('renders h2 element', () => {
        expect(title).toHaveLength(1);
      });

      it('renders with the correct props', () => {
        const expectedProps = {
          children: props.title,
          className: 'full-post__title'
        };

        expect(title.props()).toEqual(expectedProps);
      });
    });

    describe('Date element', () => {
      const date = enzymeWrapper.find('h3');

      it('renders h3 element', () => {
        expect(date).toHaveLength(1);
      });

      it('renders with the correct props', () => {
        const formattedDate = new Date(props.created_at);
        const expectedProps = {
          children: formattedDate.toDateString(),
          className: 'full-post__date'
        };

        expect(date.props()).toEqual(expectedProps);
      });
    });

    describe('Content element', () => {
      const content = enzymeWrapper.find('div.full-post__content');

      it('renders the element', () => {
        expect(content).toHaveLength(1);
      });

      it('renders with the correct props', () => {
        const expectedProps = {
          children: props.content,
          className: 'full-post__content'
        };

        expect(content.props()).toEqual(expectedProps);
      });
    });

    describe('Link child', () => {
      const link = enzymeWrapper.find('Link');

      it('renders correctly', () => {
        expect(link).toHaveLength(1);
      });

      it('renders with the correct props', () => {
        const expectedProps = {
          children: 'Back to Post List',
          className: 'btn btn-primary',
          replace: false,
          to: '/'
        };

        expect(link.props()).toEqual(expectedProps);
      });
    });
  });
});
