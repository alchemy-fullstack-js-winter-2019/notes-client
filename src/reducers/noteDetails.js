import {
  CREATE_NOTE,
  CREATE_NOTE_PENDING,
  CREATE_NOTE_ERROR,
  UPDATE_TITLE,
  UPDATE_BODY,
  FETCH_NOTE_DETAILS,
  FETCH_NOTE_DETAILS_PENDING,
  FETCH_NOTE_DETAILS_ERROR,
  CLEAR_DETAILS,
  UPDATE_NOTE,
  UPDATE_NOTE_PENDING
} from '../actions/noteDetails';

const initialState = {
  loading: false,
  error: null,
  title: '',
  body: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        loading: false,
        title: '',
        body: ''
      };
    case CREATE_NOTE_PENDING:
      return { ...state, loading: true };
    case CREATE_NOTE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case UPDATE_NOTE:
      return {
        ...state,
        loading: false,
        error: null,
        title: action.payload.title,
        body: action.payload.body
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
        body: action.payload.body,
        loading: false
      };
    case FETCH_NOTE_DETAILS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_NOTE_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case CLEAR_DETAILS:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
