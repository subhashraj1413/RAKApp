import { all, fork } from "redux-saga/effects";
import {watchUserInfoSaga} from "./userSaga";

export default function* rootSaga() {
  yield all([fork(watchUserInfoSaga)]);
}
