import { FETCH_NOTES } from '../actions/notes';
import { CREATE_NOTE, CREATE_NOTE_PENDING, CREATE_NOTE_FULFILLED } from '../actions/noteDetails';

const initialState = {
  list: [],
  pendingNote: false,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case CREATE_NOTE_PENDING:
      return {
        ...state,
        pendingNote: true
      };
    case CREATE_NOTE_FULFILLED:
      return {
        ...state,
        pendingNote: false
      };
    case FETCH_NOTES:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
