import { CREATE_NOTE, CREATE_NOTE_PENDING, CREATE_NOTE_ERROR, UPDATE_TITLE, UPDATE_BODY } from '../actions/noteDetails';

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
        error: action.payload.message
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
