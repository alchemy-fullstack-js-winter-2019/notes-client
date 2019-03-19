import reducer from './noteDetails';
import {
  CREATE_NOTE_ERROR,
  CREATE_NOTE_PENDING,
  CREATE_NOTE,
  UPDATE_TITLE,
  UPDATE_BODY,
  FETCH_NOTE_DETAILS,
  FETCH_NOTE_DETAILS_PENDING,
  FETCH_NOTE_DETAILS_ERROR,
  CLEAR_DETAILS,
  UPDATE_NOTE
} from '../actions/noteDetails';

describe('noteDetails reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      loading: false,
      error: null,
      title: 'My Title',
      body: 'A Note about stuff'
    };
  });

  it('handles the CREATE_NOTE action', () => {
    const updatedState = reducer(state, {
      type: CREATE_NOTE,
    });

    expect(updatedState).toEqual({
      loading: false,
      error: null,
      title: '',
      body: ''
    });
  });

  it('handles the CREATE_NOTE_PENDING action', () => {
    const updatedState = reducer(state, {
      type: CREATE_NOTE_PENDING
    });

    expect(updatedState).toEqual({
      ...state,
      loading: true
    });
  });

  it('handles the CREATE_NOTE_ERROR', () => {
    const updatedState = reducer(state, {
      type: CREATE_NOTE_ERROR,
      payload: 'error'
    });

    expect(updatedState).toEqual({
      ...state,
      error: 'error'
    });
  });

  it('handles the UPDATE_TITLE', () => {
    const updatedState = reducer(state, {
      type: UPDATE_TITLE,
      payload: 'My New Title'
    });

    expect(updatedState).toEqual({
      ...state,
      title: 'My New Title'
    });
  });

  it('handles the UPDATE_TITLE', () => {
    const updatedState = reducer(state, {
      type: UPDATE_BODY,
      payload: 'my new body'
    });

    expect(updatedState).toEqual({
      ...state,
      body: 'my new body'
    });
  });

  it('handles the FETCH_NOTE_DETAILS', () => {
    const updatedState = reducer(state, {
      type: FETCH_NOTE_DETAILS,
      payload: { title: 'My New Title', body: '1234' }
    });

    expect(updatedState).toEqual({
      ...state,
      title: 'My New Title',
      body: '1234',
      loading: false
    });
  });

  it('handles the FETCH_NOTE_DETAILS_PENDING', () => {
    const updatedState = reducer(state, {
      type: FETCH_NOTE_DETAILS_PENDING,
    });

    expect(updatedState).toEqual({
      ...state,
      loading: true
    });
  });

  it('handles the FETCH_NOTE_DETAILS_ERROR', () => {
    const updatedState = reducer(state, {
      type: FETCH_NOTE_DETAILS_ERROR,
      payload: 'error message'
    });

    expect(updatedState).toEqual({
      ...state,
      error: 'error message'
    });
  });

  it('handles the CLEAR_DETAILS', () => {
    const updatedState = reducer(state, {
      type: CLEAR_DETAILS,
    });

    expect(updatedState).toEqual({
      title: '',
      body: '',
      error: null,
      loading: false
    });
  });

  it('handles the UPDATE_NOTE action', () => {
    const updatedState = reducer(state, {
      type: UPDATE_NOTE,
      payload: {
        title: 'My Updated Title',
        body: 'My updated body'
      }
    });

    expect(updatedState).toEqual({
      loading: false,
      error: null,
      title: 'My Updated Title',
      body: 'My updated body'
    });
  });
});
