import Users from './Users';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.usersPage.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;
