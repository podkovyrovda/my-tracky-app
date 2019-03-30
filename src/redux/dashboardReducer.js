const ADD_TRACK = 'ADD-TRACK';
const UPDATE_TRACK = 'UPDATE-TRACK';

const initialState = {
    days: [
      { day:'Yesterday', 
        date:'Tuesday, March, 26', 
        tracks: [
          {name: 'Running'},
          {name: 'Coding'},
          {name: 'No aclohol'}
        ]
      },
      { day:'Today',
        date:'Wednesday, March, 27', 
        tracks: [
            {name: 'Running'},
            {name: 'Coding'},
            {name: 'No aclohol'}
          ]
        },
      { day:'Tomorrow',
      date:'Thursday, March, 28', 
      tracks: [
          {name: 'Running'},
          {name: 'Coding'},
          {name: 'No aclohol'}
        ]
      }
    ],
    user: { 
      name: 'Andrey', streak: {name: 'running', service: 'Strava', value: '20'}
    },
    newTrack: ''
  };

const dashboardReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TRACK:
      let newTrack = state.newTrack;
      state.days[1].tracks.push({name: newTrack});
      state.newTrack = '';
      return state;
    case UPDATE_TRACK:
      state.newTrack = action.text;
      return state;
    default:
      return state;
  }
}

export const updateTrackActionCreator = (name) => ({
  type: UPDATE_TRACK,
  text: name,
  });

export const addTrackActionCreator = () => ({type: ADD_TRACK});

export default dashboardReducer;