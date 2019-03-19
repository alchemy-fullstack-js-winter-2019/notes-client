import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

describe('Note tests', () => {
  it('matches a snapshot', () => {
    const note = {
      _id: '1234',
      author: 'test.user',
      title: 'My Title',
      body: 'My Body'
    };
    expect(shallow(
      <Note note={note} />
    )).toMatchSnapshot();
  });


});
