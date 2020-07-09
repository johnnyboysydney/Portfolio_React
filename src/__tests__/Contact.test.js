import React from 'react';
import ReactDOM from 'react-dom';
import App from '..components/Contact';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact />, div);
  });
  