import { all } from "@redux-saga/core/effects";
import { delete_user_saga, get_user_saga, post_user_saga, put_user_saga } from "./rootsaga/rootusersaga";
import { delete_user_handler, get_user_handler, post_user_handler, put_user_handler } from "./user/manageuser";
export function* rootSaga() {
  yield all(
    [
      get_user_saga(),
      get_user_handler(),
      post_user_saga(),
      post_user_handler(),
      delete_user_saga(),
      delete_user_handler(),
      put_user_saga(),
      put_user_handler()
    ]);
}