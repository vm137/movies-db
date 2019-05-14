// @flow

import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  location: Object,
}

const NoMatch = ({ location }: Props) => (
  <div>
    <h3>
      Page 404. No match for
      <code>{location.pathname}</code>
    </h3>
    <Link to="/search">back to search</Link>
  </div>
);

export default NoMatch;
