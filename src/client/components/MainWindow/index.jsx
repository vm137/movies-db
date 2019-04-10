import { connect } from 'react-redux';
import MainWindow from './MainWindow';

const mapStateToProps = state => ({
  showPage: state.showPage,
});

export default connect(mapStateToProps)(MainWindow);
