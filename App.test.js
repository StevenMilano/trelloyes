import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Card from './Card.js';
import List from './List.js';
import renderer from 'react-test-renderer'
import STORE from './store.js'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Trelloyes/);
  expect(linkElement).toBeInTheDocument();
});

describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card name="Card"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List
      key={'1'}
      header={'First list'}
      cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
},

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List 
              key={'1'}
              header={'First list'}
              cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  }));
});