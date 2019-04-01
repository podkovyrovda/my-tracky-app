import {connect} from 'react-redux';

import {setUsers, setStatus} from '../../redux/usersReducer'

import Users from './Users';

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    status: state.usersPage.status
  });

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => {
    dispatch(setUsers(users))
  },
  setStatus: (status) => {
    dispatch(setStatus(status))
  }
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
