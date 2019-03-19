import { combineReducers } from 'redux';
import notes from './notes';
import noteForm from './noteForm';
import noteDetails from './noteDetails';
import session from './session';

export default combineReducers({
  notes,
  noteForm,
  noteDetails,
  session
});
