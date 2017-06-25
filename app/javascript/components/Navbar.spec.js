import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

const setup = () => {
  const enzymeWrapper = shallow(<Navbar />);

  return {
    enzymeWrapper
  };
};

describe('components', () => {
  describe('Navbar', () => {
    const { enzymeWrapper } = setup();

    it('renders correctly the nav element', () => {
      const nav = enzymeWrapper.find('div.navbar.navbar-inverse.navbar-static-top');

      expect(nav).toHaveLength(1);
    });

    it('renders a container element', () => {
      const container = enzymeWrapper.find('div.container');

      expect(container).toHaveLength(1);
    });

    it('renders the navbar header', () => {
      const header = enzymeWrapper.find('div.navbar-header');

      expect(header).toHaveLength(1);
    });

    it('renders a navbar collapse element', () => {
      const collapse = enzymeWrapper.find('div.collapse.navbar-collapse');

      expect(collapse).toHaveLength(1);
    });

    describe('ul element', () => {
      const ul = enzymeWrapper.find('ul.nav.navbar-nav');

      it('renders correctly', () => {
        expect(ul).toHaveLength(1);
      });

      it('renders li element correctly', () => {
        const li = ul.find('li');

        expect(li).toHaveLength(4);
      });
    });

    describe('children components', () => {
      const links = enzymeWrapper.find('Link');

      it('renders correctly', () => {
        expect(links).toHaveLength(2);
      });

      it('renders logo link with correct props', () => {
        const expectedProps = {
          className: 'navbar-brand',
          children: 'MY BLOG',
          to: '/',
          replace: false
        };

        expect(links.first().props()).toEqual(expectedProps);
      });

      it('renders home link with correct props', () => {
        const span = <span className='sr-only'>(current)</span>;
        const children = 'Home';

        const expectedProps = {
          children,
          to: '/',
          replace: false
        };

        expect(links.last().props()).toEqual(expectedProps);
      });
    });
  });
});
