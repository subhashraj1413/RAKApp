import {combineReducers} from 'redux';
import getBasicReducer from '../../utils/reducer';
import * as UserActions from '../actionCreators/userActions';

const UserReducer = combineReducers({
  userInfo: getBasicReducer({
    request: UserActions.GET_USER_INFO_REQUEST,
    success: UserActions.GET_USER_INFO_SUCCESS,
    failure: UserActions.GET_USER_INFO_FAILURE,
  }),
  userLogs: getBasicReducer({
    request: UserActions.ADD_USER_LOGS_REQUEST,
    success: UserActions.ADD_USER_LOGS_SUCCESS,
    failure: UserActions.ADD_USER_LOGS_FAILURE,
  }),
});

export default UserReducer;
