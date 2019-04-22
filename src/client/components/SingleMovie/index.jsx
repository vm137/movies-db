import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleMovie from './SingleMovie';
import { eraseSingleMovieAction, fetchSingleMovieAction } from '../../actions/actions';

const mapStateToProps = state => ({
  movieR: state.movie,
});

const mapDispatchProps = dispatch => ({
  eraseSingleMovieAction: () => dispatch(eraseSingleMovieAction()),
  fetchSingleMovie: movieId => dispatch(fetchSingleMovieAction(movieId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(SingleMovie));
