import injectSheet from 'react-jss';

const shared = {
  color: '#ff594b',
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
  fontWeight: 'bold',
  fontSize: '17px',
  textShadow: '1px 1px 2px rgb(69, 69, 69)',
};

const styles = {
  logo: {
    ...shared,
    top: '16px',
    left: '5%',
    position: 'absolute',
  },
  logoBottom: {
    top: '18px',
    left: '5%',
    position: 'absolute',
  },
};

export default injectSheet(styles);
