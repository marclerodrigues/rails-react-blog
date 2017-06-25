import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const setup = () => {
  const enzymeWrapper = shallow(<Footer />);

  return {
    enzymeWrapper
  };
};

describe('components', () => {
  describe('Footer', () => {
    const { enzymeWrapper } = setup();

    it('renders a div with footer id', () => {
      const footer = enzymeWrapper.find('div#footer');

      expect(footer).toHaveLength(1);
    });

    it('renders tree large columns', () => {
      const footerColumns = enzymeWrapper.find('div.col-lg-4');

      expect(footerColumns).toHaveLength(3);
    });

    it('renders correctly address section', () => {
      const address = enzymeWrapper.find('div.my-address');

      expect(address).toHaveLength(1);
    });

    it('renders correctly social links section', () => {
      const socialLinks = enzymeWrapper.find('div.social-links');

      expect(socialLinks).toHaveLength(1);
    });

    it('renders correctly about me section', () => {
      const aboutMe = enzymeWrapper.find('div.about-me');

      expect(aboutMe).toHaveLength(1)
    });
  });
});
