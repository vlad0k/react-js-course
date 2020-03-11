import {connect} from 'react-redux';
import {compose} from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { logout } from '../../redux/auth-reducer.js';

import Settings from './Settings.jsx';

const mapStateToProps = state => ({
  isAthorized: state.auth.isAuthorized,
})

export default compose(
  connect(mapStateToProps, { logout }),
  withAuthRedirect
)(Settings)
