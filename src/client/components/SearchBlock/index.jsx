import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBlock from './SearchBlock';
import { fetchMoviesAction, swapSearchByAction, swapSortByAction } from '../../actions/actions';

const mapStateToProps = state => ({
  totalR: state.total,
  movies: state.movies,
  searchBy: state.searchBy,
  sortBy: state.sortBy,
});

const mapDispatchProps = dispatch => ({
  fetchMovies: (searchString, searchBy) => dispatch(fetchMoviesAction(searchString, searchBy)),
  swapSearchBy: () => dispatch(swapSearchByAction()),
  swapSortBy: (movies, sortBy) => dispatch(swapSortByAction(movies, sortBy)),
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(SearchBlock));
