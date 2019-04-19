import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleMovie from './SingleMovie';
import { fetchSingleMovieAction } from '../../actions/actions';

const mapStateToProps = state => ({
  movieR: state.movie,
});

const mapDispatchProps = dispatch => ({
  fetchSingleMovie: movieId => dispatch(fetchSingleMovieAction(movieId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchProps)(SingleMovie));
