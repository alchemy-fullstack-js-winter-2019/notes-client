import reducer from './noteForm';
import {
  CREATE_NOTE_ERROR,
  CREATE_NOTE_PENDING,
  CREATE_NOTE,
  UPDATE_TITLE,
  UPDATE_BODY,
  CLEAR_FORM
} from '../actions/noteForm';

jest.mock('../services/auth.js');
jest.mock('../services/notes.js');

describe('noteForm reducer', () => {
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

  it('handles the CLEAR_FORM', () => {
    const updatedState = reducer(state, {
      type: CLEAR_FORM,
    });

    expect(updatedState).toEqual({
      title: '',
      body: '',
      error: null,
      loading: false
    });
  });
});
