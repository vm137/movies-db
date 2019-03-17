import React, {Component} from 'react';
import './SearchResults.scss';


export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div className="results-wrapper">
            <h2>search results</h2>
            <div>{this.props.data}</div>
          </div>
        );
    }
}
