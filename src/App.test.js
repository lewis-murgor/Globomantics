import React from 'react';
import ReactDom from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './main-page';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});
