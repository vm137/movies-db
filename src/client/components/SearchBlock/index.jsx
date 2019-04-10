import { connect } from 'react-redux';
import SearchBlock from './SearchBlock';
import { fetchMoviesAction } from '../../actions/actions';

const mapStateToProps = state => ({
  moviesTotalR: state.total,
});

const mapDispatchProps = dispatch => ({
  fetchMovies: (searchString, searchBy) => dispatch(fetchMoviesAction(searchString, searchBy)),
});

export default connect(mapStateToProps, mapDispatchProps)(SearchBlock);
