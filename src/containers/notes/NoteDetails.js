import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTitle, getBody } from '../../selectors/noteDetails';
import { fetchNoteDetails, clearDetails } from '../../actions/noteDetails';
import { withFetch } from '../../components/withFetch';
import Note from '../../components/notes/Note';

const mapStateToProps = state => ({
  title: getTitle(state),
  body: getBody(state)
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
