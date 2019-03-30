import Dashboard from './Dashboard';
import {addTrackActionCreator, updateTrackActionCreator} from '../../redux/dashboardReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dashboardPage: state.dashboardPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addTrack: () => {
      dispatch(addTrackActionCreator());
    },
    updateTrack: (name) => {
      dispatch(updateTrackActionCreator(name));
    }
  }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer;