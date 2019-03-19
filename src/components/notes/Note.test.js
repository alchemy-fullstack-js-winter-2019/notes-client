import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

describe('Note tests', () => {
  it('matches a snapshot', () => {
    expect(shallow(
      <Note id="1234" title="My Title" body="A body" />
    )).toMatchSnapshot();
  });


});