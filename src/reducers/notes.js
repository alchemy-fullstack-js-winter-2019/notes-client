import { CREATE_NOTE, CREATE_NOTE_PENDING, CREATE_NOTE_ERROR, UPDATE_TITLE, UPDATE_BODY } from '../actions/notes';

const initialState = {
  list: [],
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
        list: [...state.list, action.payload],
        loading: false,
        title: '',
        body: ''
      };
    case CREATE_NOTE_PENDING:
      return { ...state, loading: true };
    case CREATE_NOTE_ERROR:
      return {
        ...state,
        list: [],
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
    default:
      return state;
  }
}
