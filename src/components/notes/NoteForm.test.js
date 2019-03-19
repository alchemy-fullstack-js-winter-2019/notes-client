import React from 'react';
import { shallow } from 'enzyme';
import NoteForm from './NoteForm';

describe('Note tests', () => {
  let wrapper;
  let createNote;
  beforeEach(() => {
    createNote = jest.fn();
    wrapper = shallow(
      <NoteForm
        title="My Title"
        body="A body"
        error={null}
        loading={false}
        createNote={createNote}
        titleChange={jest.fn()}
        bodyChange={jest.fn()}
      />
    );
  });
  it('matches a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls the createNote function on sumbit', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });

    expect(createNote).toHaveBeenCalled();
  });
});
