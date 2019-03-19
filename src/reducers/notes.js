import { FETCH_NOTES } from '../actions/notes';
import {
  CREATE_NOTE_PENDING,
  CREATE_NOTE_FULFILLED,
  CREATE_NOTE
} from '../actions/noteForm';

const initialState = {
  list: [],
  pendingNote: false,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        list: action.payload
      };
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
    default:
      return state;
  }
}
