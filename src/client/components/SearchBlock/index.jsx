import { connect } from 'react-redux';
import SearchBlock from './SearchBlock';
import { fetchMoviesAction, swapSearchByAction, swapSortByAction } from '../../actions/actions';

const mapStateToProps = state => ({
  totalR: state.total,
  searchBy: state.searchBy,
  sortBy: state.sortBy,
});

const mapDispatchProps = dispatch => ({
  fetchMovies: (searchString, searchBy) => dispatch(fetchMoviesAction(searchString, searchBy)),
  swapSearchBy: () => dispatch(swapSearchByAction()),
  swapSortBy: () => dispatch(swapSortByAction()),
});

export default connect(mapStateToProps, mapDispatchProps)(SearchBlock);
