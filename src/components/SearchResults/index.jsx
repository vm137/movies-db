import { connect } from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = state => ({
  moviesR: state.movies,
});

export default connect(mapStateToProps)(SearchResults);
