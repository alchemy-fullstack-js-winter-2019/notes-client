import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotesForm from '../../components/notes/NoteForm';
import { withFetch } from '../../components/withFetch';
import { getTitle, getBody, getNoteFormError, isNoteFormLoading } from '../../selectors/noteForm';
import { fetchNoteDetails, clearDetails } from '../../actions/noteDetails';
import { clearForm, updateNote, updateTitle, updateBody } from '../../actions/noteForm';

const mapStateToProps = state => ({
  submitText: 'Edit',
  title: getTitle(state),
  body: getBody(state),
  error: getNoteFormError(state),
  loading: isNoteFormLoading(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchNoteDetails(props.match.params.id));
  },
  clear() {
    dispatch(clearForm());
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
