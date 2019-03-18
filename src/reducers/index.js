import { combineReducers } from 'redux';
import notes from './notes';
import noteDetails from './noteDetails';

export default combineReducers({
  notes,
  noteDetails
});
