import {
  clearDetails,
  CLEAR_DETAILS,
  FETCH_NOTE_DETAILS,
  FETCH_NOTE_DETAILS_PENDING,
  FETCH_NOTE_DETAILS_FULFILLED,
  FETCH_NOTE_DETAILS_ERROR,
  fetchNoteDetails,
} from './noteDetails';

jest.mock('../services/notes.js', () => ({
  getNote: () => Promise.resolve()
}));

jest.mock('../services/auth.js');

describe('noteDetails action creators', () => {


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

  it('creates an action to CLEAR_DETAILS', () => {
    const action = clearDetails();
    expect(action).toEqual({
      type: CLEAR_DETAILS
    });
  });
});
