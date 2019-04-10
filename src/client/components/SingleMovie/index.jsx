import { connect } from 'react-redux';
import SingleMovie from './SingleMovie';
import { showSearchBlockAction } from '../../actions/actions';

const mapStateToProps = state => ({
  movieR: state.movie,
});

const mapDispatchProps = dispatch => ({
  showSearchBlock: () => dispatch(showSearchBlockAction([])),
});

export default connect(mapStateToProps, mapDispatchProps)(SingleMovie);
