import { connect } from 'react-redux';
import Notes from '../../components/notes/Notes';
import { getNotesSummary } from '../../selectors/notes';
import { fetchNotes } from '../../actions/notes';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  notes: getNotesSummary(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Notes));
