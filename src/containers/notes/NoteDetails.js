import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchNoteDetails, clearDetails } from '../../actions/noteDetails';
import { withFetch } from '../../components/withFetch';
import Note from '../../components/notes/Note';
import { getNoteDetails } from '../../selectors/noteDetails';

const mapStateToProps = state => ({
  note: getNoteDetails(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchNoteDetails(props.match.params.id));
  },
  clear() {
    dispatch(clearDetails());
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Note)));
