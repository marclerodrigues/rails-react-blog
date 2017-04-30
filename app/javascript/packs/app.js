import React from 'react';
import { render } from 'react-dom';
import Root from '../containers/Root';

document.addEventListener("DOMContentLoaded", () => {
  const node = <Root />;
  const target = document.createElement('div');

  render(node, document.body.appendChild(target));
});
