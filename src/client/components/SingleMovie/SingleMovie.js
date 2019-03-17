import React, {Component} from 'react';
import SearchResults from '../SearchResults/SearchResults';

import './SingleMovie.scss';

export default class SingleMovie extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <h2>Single Movie.</h2>

            <SearchResults />

          </div>
        );
    }
}
