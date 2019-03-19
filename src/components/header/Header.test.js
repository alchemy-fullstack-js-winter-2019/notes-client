import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header tests', () => {
  it('matches a snapshot', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
