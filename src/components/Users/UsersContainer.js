import {connect} from 'react-redux';

import Users from './Users';

const mapStateToProps = (state) => ({
    state: state.usersPage.users
  });

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;
