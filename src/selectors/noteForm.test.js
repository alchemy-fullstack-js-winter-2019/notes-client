import {
  getTitle,
  getBody,
  getNoteFormError,
  isNoteFormLoading
} from './noteForm';

describe('noteDetails selectors', () => {
  let state = {
    noteForm: {
      title: 'My Note',
      body: '12345',
      error: { error: 'My Error' },
      loading: true
    }
  };

  it('gets a title from state', () => {
    expect(getTitle(state)).toEqual('My Note');
  });

  it('gets a body from state', () => {
    expect(getBody(state)).toEqual('12345');
  });

  it('gets an error from state', () => {
    expect(getNoteFormError(state)).toEqual('My Error');
  });

  it('gets an error from state when it is a message', () => {
    let state = {
      noteForm: {
        title: 'My Note',
        body: '12345',
        error: { message: 'My Error' },
        loading: true
      }
    };
    expect(getNoteFormError(state)).toEqual('My Error');
  });

  it('gets null when error is null', () => {
    let state = {
      noteForm: {
        title: 'My Note',
        body: '12345',
        error: null,
        loading: true
      }
    };
    expect(getNoteFormError(state)).toEqual(null);
  });

  it('gets loading from state', () => {
    expect(isNoteFormLoading(state)).toEqual(true);
  });
});
