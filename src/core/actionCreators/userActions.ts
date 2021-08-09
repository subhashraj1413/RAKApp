/**
 * Actions Types
 */
export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';
export const ADD_USER_LOGS_REQUEST = 'ADD_USER_LOGS_REQUEST';
export const ADD_USER_LOGS_SUCCESS = 'ADD_USER_LOGS_SUCCESS';
export const ADD_USER_LOGS_FAILURE = 'GET_USER_INFO_FAILURE';

export const fetchUserInfo = (payload: any) => ({
  type: GET_USER_INFO_REQUEST,
  payload,
});

export const fetchUserInfoSuccess = (payload: any) => ({
  type: GET_USER_INFO_SUCCESS,
  payload,
});

export const fetchUserInfoFailure = (payload: any) => ({
  type: GET_USER_INFO_FAILURE,
  payload,
});
/** Insert User Logs */
export const insertUserLogs = (payload: any) => ({
  type: ADD_USER_LOGS_REQUEST,
  payload,
});

export const insertUserLogsSuccess = (payload: any) => ({
  type: ADD_USER_LOGS_SUCCESS,
  payload,
});

export const insertUserLogsFailure = (payload: any) => ({
  type: ADD_USER_LOGS_FAILURE,
  payload,
});
