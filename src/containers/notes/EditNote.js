import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBody, getTitle } from '../../selectors/noteDetails';
import { updateTitle, updateBody, updateNote, fetchNoteDetails, clearDetails } from '../../actions/noteDetails';
import NotesForm from '../../components/notes/NoteForm';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  title: getTitle(state),
  body: getBody(state),
  error: null,
  loading: false
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchNoteDetails(props.match.params.id));
  },
  clear() {
    dispatch(clearDetails());
  },
  handleSubmit(title, body, event) {
    event.preventDefault();
    dispatch(updateNote(props.match.params.id, { title, body }));
  },
  titleChange({ target }) {
    dispatch(updateTitle(target.value));
  },
  bodyChange({ target }) {
    dispatch(updateBody(target.value));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(NotesForm)));
