import React from 'react';
import { shallow } from 'enzyme';
import CommentForm from './CommentForm.js';

const setup = () => {
  const postId = 1;
  const handleSubmit = (event) => {
    return 'Submited';
  };
  const props = {
    postId,
    handleSubmit
  };

  const enzymeWrapper = shallow(<CommentForm {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('CommentForn', () => {
    const  { props, enzymeWrapper } = setup();

    it('renders a comment form div', () => {
      const div = enzymeWrapper.find('div.comment-form');

      expect(div).toHaveLength(1);
    });

    it('renders a form element', () => {
      const form = enzymeWrapper.find('form');

      expect(form).toHaveLength(1);
    });

    it('renders the correct form title', () => {
      const formTitle = enzymeWrapper.find('form h3');

      expect(formTitle.text()).toEqual('New Comment');
    });

    it('renders a hidden input correctly', () => {
      const hiddenInput = enzymeWrapper.find('input[type="hidden"]');
      const expectedProps = { name: 'post_id', type: 'hidden', value: 1 };

      expect(hiddenInput.props()).toEqual(expectedProps);
    });

    it('renders a submit button correctly', () => {
      const submitButton= enzymeWrapper.find('input[type="submit"]');
      const expectedProps = {
        className: 'btn btn-success',
        type: 'submit',
        value: 'Create'
      };

      expect(submitButton.props()).toEqual(expectedProps);
    });

    it('renders the correct amout of form groups', () => {
      const formGroups = enzymeWrapper.find('div.form-group');

      expect(formGroups).toHaveLength(2);
    });

    describe('username form-group', () => {
      const formGroup = enzymeWrapper.find('div.form-group').first();

      it('renders the correct label', () => {
        const label = formGroup.find('label.comment-form__label');

        expect(label.text()).toEqual('Username:');
      });

      it('renders the correct input', () => {
        const input = formGroup.find('input#username');
        const expectedProps = {
          id: 'username',
          name: 'username',
          className: 'form-control',
          type: 'text',
          required: true
        };

        expect(input.props()).toEqual(expectedProps);
      });
    });

    describe('content form-group', () => {
      const formGroup = enzymeWrapper.find('div.form-group').last();

      it('renders the correct label', () => {
        const label = formGroup.find('label.comment-form__label');

        expect(label.text()).toEqual('Comment:');
      });

      it('renders the correct input', () => {
        const input = formGroup.find('input#content');
        const expectedProps = {
          id: 'content',
          name: 'content',
          className: 'form-control',
          type: 'text',
          required: true
        };

        expect(input.props()).toEqual(expectedProps);
      });
    });
  });
});
