import { takeLatest } from "@redux-saga/core/effects";
import { DELETE_USER_PROCESS, GET_USER_PROCESS, POST_USER_PROCESS, PUT_USER_PROCESS } from "../../../components/user/action/action";
import { delete_user_handler, get_user_handler, post_user_handler, put_user_handler } from "../user/manageuser"

// GET - product saga
export function* get_user_saga() {
  yield takeLatest(GET_USER_PROCESS, get_user_handler);
}
export function* post_user_saga() {
  yield takeLatest(POST_USER_PROCESS, post_user_handler);
}
export function* delete_user_saga() {
  yield takeLatest(DELETE_USER_PROCESS, delete_user_handler);
}
export function* put_user_saga() {
  yield takeLatest(PUT_USER_PROCESS, put_user_handler);
}