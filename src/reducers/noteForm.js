import {
  CREATE_NOTE,
  UPDATE_NOTE,
  CLEAR_FORM,
  UPDATE_NOTE_PENDING,
  CREATE_NOTE_PENDING,
  UPDATE_NOTE_ERROR,
  CREATE_NOTE_ERROR,
  UPDATE_TITLE,
  UPDATE_BODY
} from '../actions/noteForm';
import { FETCH_NOTE_DETAILS } from '../actions/noteDetails';

const initialState = {
  loading: false,
  error: null,
  title: '',
  body: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_NOTE:
    case UPDATE_NOTE:
    case CLEAR_FORM:
      return {
        ...initialState
      };
    case UPDATE_NOTE_PENDING:
    case CREATE_NOTE_PENDING:
      return { ...state, loading: true };
    case UPDATE_NOTE_ERROR:
    case CREATE_NOTE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case UPDATE_BODY:
      return {
        ...state,
        body: action.payload
      };
    case FETCH_NOTE_DETAILS:
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body
      };
    default:
      return state;
  }
}
