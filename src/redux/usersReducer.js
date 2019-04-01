const SET_USERS = 'MT/USERS/SET-USERS';
const SET_STATUS ='MT/USERS/SET-STATUS';

export const statuses = {
  NOT_INITIALIZED: 'NOT-INITIALIZED',
  IN_PROGRESS: 'IN-PROGRESS',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
};

export const setUsers = (users) => ({type: SET_USERS, users});

export const setStatus = (status) => ({type: SET_STATUS, status});

const initialState = {
  users: [],
  status: statuses.NOT_INITIALIZED
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
}

export default usersReducer;