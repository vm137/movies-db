import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBlock from '../SearchBlock';
import SingleMovie from '../SingleMovie';
import './style.scss';

const MainWindow = ({ showPage }) => (
  <div className="mainWindow">
    {showPage === 'searchBlock' && <SearchBlock />}
    {showPage === 'singleMovie' && <SingleMovie />}
  </div>
); // TODO: add 'no movies found.'

MainWindow.propTypes = {
  showPage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  showPage: state.showPage,
});

export default connect(mapStateToProps)(MainWindow);
