import { call, put } from "redux-saga/effects";
import { get_user } from "../../user/api/api";
import { GET_USER_ERROR, GET_USER_PROCESS, GET_USER_SUCCESS } from "../../user/action/action";


export function* get_user_handler() {
    try {
        console.log("{========================}");
        const res = yield call(get_user)
        const status = res.status
        const data = res.data
        if (status === 200 || status === 201) {
            yield put({ type: GET_USER_SUCCESS, data })
        }
        else {
            yield put({ type: GET_USER_ERROR, data })
        }
    } catch (error) {
        console.log(error);
    }
}
