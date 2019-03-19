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
  updateNote,
  UPDATE_NOTE,
  UPDATE_NOTE_PENDING,
  UPDATE_NOTE_FULFILLED,
  UPDATE_NOTE_ERROR,
  clearForm,
  CLEAR_FORM
} from './noteForm';

jest.mock('../services/notes.js', () => ({
  postNote: () => Promise.resolve(),
  putNote: () => Promise.resolve()
}));

jest.mock('../services/auth.js');

describe('noteForm actions', () => {
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

  it('creates a UPDATE_NOTE action', () => {
    const action = updateNote({ title: 'hi', body: 'bye' });
    expect(action).toEqual({
      type: UPDATE_NOTE,
      pendingType: UPDATE_NOTE_PENDING,
      fulfilledType: UPDATE_NOTE_FULFILLED,
      rejectedType: UPDATE_NOTE_ERROR,
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

  it('creates an action to CLEAR_FORM', () => {
    const action = clearForm();
    expect(action).toEqual({
      type: CLEAR_FORM
    });
  });
});
