import { connect } from 'react-redux';
import NoteForm from '../../components/notes/NoteForm';
import { createNote, updateTitle, updateBody } from '../../actions/noteDetails';
import { getNoteDetailsError, isNoteDetailsLoading, getTitle, getBody } from '../../selectors/noteDetails';

const mapStateToProps = state => ({
  title: getTitle(state),
  body: getBody(state),
  error: getNoteDetailsError(state),
  loading: isNoteDetailsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(title, body, event) {
    event.preventDefault();
    dispatch(createNote({ title, body }));
  },

  titleChange({ target }) {
    dispatch(updateTitle(target.value));
  },

  bodyChange({ target }) {
    dispatch(updateBody(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
