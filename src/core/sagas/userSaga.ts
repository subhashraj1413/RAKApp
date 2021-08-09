import axios from 'axios';
import {takeLatest, call, put} from 'redux-saga/effects';
import * as Actions from '../actionCreators/userActions';

export function* watchUserInfoSaga() {
  yield takeLatest(Actions.GET_USER_INFO_REQUEST, getUserInfo);
  yield takeLatest(Actions.GET_USER_INFO_REQUEST, getUserInfo);
}

export function* getUserInfo(actions: any) {
  try {
    const response = yield call(getUserInfoCall, actions);

    if (response) {
      yield put(Actions.fetchUserInfoSuccess(response));
    } else {
      yield put(Actions.fetchUserInfoFailure('User Not Found'));
    }
  } catch (error) {
    yield put(Actions.fetchUserInfoFailure(error));
  }
}

export async function getUserInfoCall(actions: any) {
  return await axios({
    method: 'post',
    url: 'https://deep-piranha-98.hasura.app/api/rest/userDetails',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-hasura-admin-secret':
        'glfvJKYgfKzkq3jngE0MRaVyxVMvCHBgTaGMkMGtMSBB6Jfa9il4muyt2hQGUP1C',
    },
    data: JSON.stringify(actions.payload),
  }).then(response => {
    return response.data.RAKBank_Users[0];
  });
}

export function* insertUserLogs(actions: any) {
  try {
    const response = yield call(insertUserLogsCall, actions);

    if (response) {
      yield put(Actions.insertUserLogsSuccess(response));
    } else {
      yield put(Actions.insertUserLogsFailure('User Not Found'));
    }
  } catch (error) {
    yield put(Actions.insertUserLogsFailure(error));
  }
}
export async function insertUserLogsCall(actions: any) {
  return await axios({
    method: 'post',
    url: 'https://deep-piranha-98.hasura.app/api/rest/insertUserLogs',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-hasura-admin-secret':
        'glfvJKYgfKzkq3jngE0MRaVyxVMvCHBgTaGMkMGtMSBB6Jfa9il4muyt2hQGUP1C',
    },
    data: JSON.stringify(actions.payload),
  }).then(response => {
    return response.data.RAKBank_Users[0];
  });
}
