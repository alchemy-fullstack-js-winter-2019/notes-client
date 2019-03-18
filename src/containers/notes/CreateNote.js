import { connect } from 'react-redux';
import NoteForm from '../../components/notes/NoteForm';
import { createNote, updateTitle, updateBody } from '../../actions/notes';
import { getTitle, getBody, getError, isLoading } from '../../selectors/notes';

const mapStateToProps = state => ({
  title: getTitle(state),
  body: getBody(state),
  error: getError(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  createNote(title, body, event) {
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
