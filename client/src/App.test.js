import React from 'react';
import {render} from '@testing-library/react';
import Navbar from './components/Navbar';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App renders without crashing', async () => {
  await render(<App />);
});

test('Navbar renders without crashing', async () => {
  await render(<Navbar />);
});


test('renders player data', async () => {
  const { findByText } = await render(<App />);
  findByText(/Alex Morgan/i);
});

