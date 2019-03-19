import {
  createNote,
  CREATE_NOTE_FULFILLED,
  CREATE_NOTE,
  CREATE_NOTE_PENDING,
  CREATE_NOTE_ERROR,
  updateTitle,
  UPDATE_TITLE,
  updateBody,
  UPDATE_BODY,
  clearDetails,
  CLEAR_DETAILS,
  FETCH_NOTE_DETAILS,
  FETCH_NOTE_DETAILS_PENDING,
  FETCH_NOTE_DETAILS_FULFILLED,
  FETCH_NOTE_DETAILS_ERROR,
  fetchNoteDetails
} from './noteDetails';

jest.mock('../services/notes.js', () => ({
  postNote: () => Promise.resolve(),
  getNote: () => Promise.resolve()
}));

describe('noteDetails action creators', () => {
  it('creates a CREATE_NOTE action', () => {
    const action = createNote({ title: 'hi', body: 'bye' });
    expect(action).toEqual({
      type: CREATE_NOTE,
      pendingType: CREATE_NOTE_PENDING,
      fulfilledType: CREATE_NOTE_FULFILLED,
      rejectedType: CREATE_NOTE_ERROR,
      payload: expect.any(Promise)
    });
  });

  it('creates an action to UPDATE_TITLE', () => {
    const action = updateTitle('My Title');
    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'My Title'
    });
  });

  it('creates an action to UPDATE_BODY', () => {
    const action = updateBody('My body');
    expect(action).toEqual({
      type: UPDATE_BODY,
      payload: 'My body'
    });
  });

  it('creates a FETCH_NOTE_DETAILS action', () => {
    const action = fetchNoteDetails('1234');
    expect(action).toEqual({
      type: FETCH_NOTE_DETAILS,
      pendingType: FETCH_NOTE_DETAILS_PENDING,
      fulfilledType: FETCH_NOTE_DETAILS_FULFILLED,
      rejectedType: FETCH_NOTE_DETAILS_ERROR,
      payload: expect.any(Promise)
    });
  });

  it('creates an action to UPDATE_BODY', () => {
    const action = clearDetails();
    expect(action).toEqual({
      type: CLEAR_DETAILS
    });
  });
});
