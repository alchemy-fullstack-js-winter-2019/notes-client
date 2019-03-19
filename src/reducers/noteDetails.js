import {
  FETCH_NOTE_DETAILS,
  FETCH_NOTE_DETAILS_PENDING,
  FETCH_NOTE_DETAILS_ERROR,
  CLEAR_DETAILS,
} from '../actions/noteDetails';

const initialState = {
  loading: false,
  error: null,
  note: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTE_DETAILS:
      return {
        ...state,
        note: action.payload,
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
