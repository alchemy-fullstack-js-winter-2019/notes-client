import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBody, getTitle, getNoteDetailsError, isNoteDetailsLoading } from '../../selectors/noteDetails';
import { updateTitle, updateBody, updateNote, fetchNoteDetails, clearDetails } from '../../actions/noteDetails';
import NotesForm from '../../components/notes/NoteForm';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  submitText: 'Edit',
  title: getTitle(state),
  body: getBody(state),
  error: getNoteDetailsError(state),
  loading: isNoteDetailsLoading(state)
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
    const action = updateNote(props.match.params.id, { title, body });
    dispatch(action);

    action.payload.then(() => {
      props.history.replace('/');
    });
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
