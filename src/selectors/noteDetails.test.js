import {
  getNoteDetails,
  getNoteDetailsError,
  isNoteDetailsLoading
} from './noteDetails';

describe('noteDetails selectors', () => {
  let state = {
    noteDetails: {
      note: {
        title: 'My Note',
        body: '12345'
      },
      error: { error: 'My Error' },
      loading: true
    }
  };

  it('gets a title from state', () => {
    expect(getNoteDetails(state)).toEqual({
      title: 'My Note',
      body: '12345'
    });
  });

  it('gets an error from state', () => {
    expect(getNoteDetailsError(state)).toEqual('My Error');
  });

  it('gets an error from state when it is a message', () => {
    let state = {
      noteDetails: {
        title: 'My Note',
        body: '12345',
        error: { message: 'My Error' },
        loading: true
      }
    };
    expect(getNoteDetailsError(state)).toEqual('My Error');
  });

  it('gets null when error is null', () => {
    let state = {
      noteDetails: {
        title: 'My Note',
        body: '12345',
        error: null,
        loading: true
      }
    };
    expect(getNoteDetailsError(state)).toEqual(null);
  });

  it('gets loading from state', () => {
    expect(isNoteDetailsLoading(state)).toEqual(true);
  });
});
