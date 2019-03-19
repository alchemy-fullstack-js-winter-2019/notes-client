import { fetchNotes, FETCH_NOTES, FETCH_NOTES_PENDING, FETCH_NOTES_FULFILLED, FETCH_NOTES_ERROR } from './notes';

jest.mock('../services/notes.js', () => ({
  getNotes: () => Promise.resolve()
}));

describe('notes action creators', () => {
  it('creates a FETCH_NOTES action', () => {
    const action = fetchNotes();

    expect(action).toEqual({
      type: FETCH_NOTES,
      pendingType: FETCH_NOTES_PENDING,
      fulfilledType: FETCH_NOTES_FULFILLED,
      rejectedType: FETCH_NOTES_ERROR,
      payload: expect.any(Promise)
    });
  });
});
