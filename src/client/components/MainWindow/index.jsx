import { connect } from 'react-redux';
import MainWindow from './MainWindow';

const mapStateToProps = ({ showPage }) => ({ showPage });

export default connect(mapStateToProps)(MainWindow);
