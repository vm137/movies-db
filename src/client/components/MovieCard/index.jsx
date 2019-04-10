import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { fetchSingleMovieAction } from '../../actions/actions';

const mapDispatchProps = dispatch => ({
  fetchSingleMovie: id => dispatch(fetchSingleMovieAction(id)),
});

export default connect(null, mapDispatchProps)(MovieCard);
