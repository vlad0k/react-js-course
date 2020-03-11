import { connect } from 'react-redux';

import Navigation from './Navigation.jsx';

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
})

export default connect(mapStateToProps)(Navigation);
