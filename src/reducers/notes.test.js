import reducer from './notes';
import { CREATE_NOTE, CREATE_NOTE_PENDING, CREATE_NOTE_FULFILLED } from '../actions/noteDetails';
import { FETCH_NOTES } from '../actions/notes';

describe('notes reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      list: [],
      pendingNote: false,
      loading: false,
      error: null
    };
  });

  it('handles the CREATE_NOTE action', () => {
    const updatedState = reducer(state, {
      type: CREATE_NOTE,
      payload: { title: 'My note', body: '1234' }
    });

    expect(updatedState).toEqual({
      ...state,
      list: [{ title: 'My note', body: '1234' }]
    });
  });

  it('handles the CREATE_NOTE_PENDING action', () => {
    const updatedState = reducer(state, {
      type: CREATE_NOTE_PENDING,
    });

    expect(updatedState).toEqual({
      ...state,
      pendingNote: true
    });
  });

  it('handles the CREATE_NOTE_FULFILLED action', () => {
    const updatedState = reducer(state, {
      type: CREATE_NOTE_FULFILLED,
    });

    expect(updatedState).toEqual({
      ...state,
      pendingNote: false
    });
  });

  it('handles the FETCH_NOTES action', () => {
    const updatedState = reducer(state, {
      type: FETCH_NOTES,
      payload: [{ title: 'My Note', body: '1234' }]
    });

    expect(updatedState).toEqual({
      ...state,
      list: [{ title: 'My Note', body: '1234' }]
    });
  });
});
