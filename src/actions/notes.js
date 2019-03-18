import { createAction } from 'promise-middleware-redux';
import { getNotes } from '../services/notes';


export const [
  fetchNotes,
  FETCH_NOTES,
  FETCH_NOTES_PENDING,
  FETCH_NOTES_FULFILLED,
  FETCH_NOTES_ERROR
] = createAction('FETCH_NOTES', getNotes);
