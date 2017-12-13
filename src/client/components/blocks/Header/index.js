import { connect } from 'react-redux';

import Component from './Header';

function mapStateToProps({ auth }) {
  return { auth };
}

const Header = connect(mapStateToProps)(Component);

export { Header };