import { createAction } from 'promise-middleware-redux';
import { postNote, putNote } from '../services/notes';

export const [
  createNote,
  CREATE_NOTE,
  CREATE_NOTE_PENDING,
  CREATE_NOTE_FULFILLED,
  CREATE_NOTE_ERROR
] = createAction('CREATE_NOTE', postNote);

export const [
  updateNote,
  UPDATE_NOTE,
  UPDATE_NOTE_PENDING,
  UPDATE_NOTE_FULFILLED,
  UPDATE_NOTE_ERROR
] = createAction('UPDATE_NOTE', putNote);

export const UPDATE_TITLE = 'UPDATE_TITLE';
export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title
});

export const UPDATE_BODY = 'UPDATE_BODY';
export const updateBody = body => ({
  type: UPDATE_BODY,
  payload: body
});

export const CLEAR_FORM = 'CLEAR_FORM';
export const clearForm = () => ({
  type: CLEAR_FORM
});
