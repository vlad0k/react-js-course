import {connect} from 'react-redux';
import { compose } from 'redux';

import Login from './Login.jsx';
import { login } from '../../redux/auth-reducer.js';
import { withProfileRedirect } from '../hoc/withProfileRedirect';

const mapStateToProps = state => ({
  isAthorized: state.auth.isAuthorized,
})

export default compose(
  connect(mapStateToProps, {login}),
  withProfileRedirect,
)(Login)
