import {
  getNotesError,
  isNotesLoading,
  getNotes,
  getNotesSummary
} from './notes';

describe('notes selectors', () => {
  let state = {
    notes: {
      error: { error: 'My error' },
      loading: true,
      list: [
        { title: 'My Note', body: 'Hi there' },
        { title: 'My Note', body: 'h'.repeat(100) },
      ]
    }
  };

  it('gets a notes error', () => {
    expect(getNotesError(state)).toEqual('My error');
  });

  it('gets a notes error when it is a message', () => {
    let state = {
      notes: {
        error: { message: 'My error' }
      }
    };
    expect(getNotesError(state)).toEqual('My error');
  });

  it('returns null when error is null', () => {
    let state = {
      notes: {
        error: null
      }
    };
    expect(getNotesError(state)).toEqual(null);
  });

  it('gets a notes loading state', () => {
    expect(isNotesLoading(state)).toEqual(true);
  });

  it('gets all notes', () => {
    expect(getNotes(state)).toEqual([
      { title: 'My Note', body: 'Hi there' },
      { title: 'My Note', body: 'h'.repeat(100) },
    ]);
  });

  it('gets all notes summaries', () => {
    expect(getNotesSummary(state)).toEqual([
      { title: 'My Note', body: 'Hi there' },
      { title: 'My Note', body: 'h'.repeat(50) + '...' },
    ]);
  });
});
