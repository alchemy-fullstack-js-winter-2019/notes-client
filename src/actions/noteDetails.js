import { createAction } from 'promise-middleware-redux';
import { getNote } from '../services/notes';

export const [
  fetchNoteDetails,
  FETCH_NOTE_DETAILS,
  FETCH_NOTE_DETAILS_PENDING,
  FETCH_NOTE_DETAILS_FULFILLED,
  FETCH_NOTE_DETAILS_ERROR
] = createAction('FETCH_NOTE_DETAILS', getNote);

export const CLEAR_DETAILS = 'CLEAR_DETAILS';
export const clearDetails = () => ({
  type: CLEAR_DETAILS
});
