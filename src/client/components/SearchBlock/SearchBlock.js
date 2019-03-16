import React, {Component} from 'react';
import enterArrow from '../../img/enter-arrow.svg';
import './SearchBlock.scss';

export default class SearchBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        /* eslint-disable no-undef */
        fetch("http://react-cdp-api.herokuapp.com/movies")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }

    render() {
        const btnRed = {backgroundColor: '#ff594b'};
        const btnGrey = {backgroundColor: 'grey'};

        return (
          <div className="search-block-wrapper">
            <div className="search-block">

              <p className="find-title">find your movie</p>

              <div className="input-wrapper">
                <input className="search-input" type="text" />
                <img className="img-arrow" src={enterArrow} alt="enter" />
              </div>

              <div className="search-buttons">
                <span className="search-by">search by</span>
                <button style={btnRed} className="btns-search btn-title" type="button">title</button>
                <button style={btnGrey} className="btns-search btn-genre" type="button">genre</button>

                <button className="btns-search btn-search" type="submit">search</button>
              </div>

            </div>
          </div>
        )
    }

}
