import { call, put } from "redux-saga/effects";
import { delete_user, get_user, post_user, put_user } from "../../../components/user/api/api";
import { DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS, PUT_USER_ERROR, PUT_USER_SUCCESS } from "../../../components/user/action/action";

export function* get_user_handler() {
    try {
        const res = yield call(get_user)
        const status = res.status
        const data = res.data
        if (status === 200 || status === 201) {
            yield put({ type: GET_USER_SUCCESS, data })
        }
        else {
            yield put({ type: GET_USER_ERROR })
        }
    } catch (error) {
        console.log(error);
    }
}
export function* post_user_handler(action) {
    try {
        const res = yield call(post_user, action)
        const data = res.data
        const status = res.status
        if (status === 200 || status === 201) {
            yield put({ type: POST_USER_SUCCESS, data })
        }
        else {
            yield put({ type: POST_USER_ERROR })
        }
    } catch (error) {
        console.log(error);
    }
}
export function* delete_user_handler(action) {
    try {
        const res = yield call(delete_user, action)
        const status = res.status
        if (status === 200 || status === 201) {
            yield put({ type: DELETE_USER_SUCCESS, action })
        }
        else {
            yield put({ type: DELETE_USER_ERROR })
        }
    } catch (error) {
        console.log(error);
    }
}
export function* put_user_handler(action) {
    try {
        const res = yield call(put_user, action)
        const data = res.data
        const status = res.status
        const index = res.index
        if (status === 200 || status === 201) {
            yield put({ type: PUT_USER_SUCCESS, data, index })
        }
        else {
            yield put({ type: PUT_USER_ERROR })
        }
    } catch (error) {
        console.log(error);
    }
}