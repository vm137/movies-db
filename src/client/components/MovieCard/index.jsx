import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { fetchSingleMovieAction } from '../../actions/actions';

const mapDispatchProps = {
  fetchSingleMovie: fetchSingleMovieAction,
};

export default connect(null, mapDispatchProps)(MovieCard);
