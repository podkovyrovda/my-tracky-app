import {connect} from 'react-redux';

import Dashboard from './Dashboard';

import {addTrackActionCreator, 
        updateTrackActionCreator} from '../../redux/dashboardReducer';

let mapStateToProps = (state) => ({
    dashboardPage: state.dashboardPage
});

let mapDispatchToProps = (dispatch) => ({
    addTrack: () => {
      dispatch(addTrackActionCreator());
    },
    updateTrack: (name) => {
      dispatch(updateTrackActionCreator(name));
    }
  });

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardContainer;