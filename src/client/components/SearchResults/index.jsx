import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';

SearchResults.propTypes = {
  moviesR: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  moviesR: state.movies,
});

export default connect(mapStateToProps)(SearchResults);
