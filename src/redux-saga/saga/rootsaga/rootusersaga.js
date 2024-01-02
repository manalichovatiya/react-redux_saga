import { takeLatest } from "@redux-saga/core/effects";

import { GET_USER_PROCESS } from "../../user/action/action";
import { get_user_handler } from "../user/manageuser";

// GET - product saga
export function* get_user_saga() {
  yield takeLatest(GET_USER_PROCESS, get_user_handler);
}