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

    it('renders a div with white id', () => {
      const div = enzymeWrapper.find('div#white');

      expect(div).toHaveLength(1);
    });

    describe('Title element', () => {
      const title = enzymeWrapper.find('h4');

      it('renders h4 element', () => {
        expect(title).toHaveLength(1);
      });

      it('renders with the correct props', () => {
        const expectedProps = {
          children: props.title
        };

        expect(title.props()).toEqual(expectedProps);
      });
    });

    describe('Date element', () => {
      const date = enzymeWrapper.find('bd');

      it('renders bd element', () => {
        expect(date).toHaveLength(1);
      });

      it('renders with the correct props', () => {
        const formattedDate = new Date(props.created_at);
        const expectedProps = {
          children: formattedDate.toDateString()
        };

        expect(date.props()).toEqual(expectedProps);
      });
    });

    describe('Content element', () => {
      const content = enzymeWrapper.find('div.post-content');

      it('renders the element', () => {
        expect(content).toHaveLength(1);
      });

      it('renders with the correct props', () => {
        const postContent = <p>{ props.content }</p>;
        const expectedProps = {
          children: postContent,
          className: 'post-content'
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
          children: '# Back',
          replace: false,
          to: '/'
        };

        expect(link.props()).toEqual(expectedProps);
      });
    });
  });
});
