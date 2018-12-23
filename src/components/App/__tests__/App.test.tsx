import * as React from 'react';
import { render, getByText, cleanup } from 'react-testing-library';
import App from '../';

describe('App', () => {
  afterEach(cleanup);

  test("display 'Hi, React TypeScript!' into div element", () => {
    const { getByText } = render(<App />);
    const elem = getByText('Hi, React TypeScript!');
    expect(elem.tagName.toLowerCase()).toEqual('div');
  })
});
