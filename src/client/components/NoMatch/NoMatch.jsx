import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      Page 404. No match for
      <code>{location.pathname}</code>
    </h3>
    <Link to="/search">back to search</Link>
  </div>
);

NoMatch.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NoMatch;
