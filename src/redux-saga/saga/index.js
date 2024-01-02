import { all } from "@redux-saga/core/effects";
import { get_user_saga } from "./rootsaga/rootusersaga";
import { get_user_handler } from "./user/manageuser";
export function* rootSaga() {
  yield all([get_user_saga(),get_user_handler()]);
}