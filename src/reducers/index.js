import { combineReducers } from 'redux';
import notes from './notes';
import noteDetails from './noteDetails';
import session from './session';

export default combineReducers({
  notes,
  noteDetails,
  session
});
