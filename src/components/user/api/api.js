import axios from "axios"
import { BASE_URL, GET_API } from "../../../redux-saga/constant"

export const get_user = async () => {
    return axios.get(BASE_URL + GET_API).then((res) => {
        return {
            data: res.data,
            status: res.status
        }
    }).catch((err) => {
        console.log(err);
    })
}

export const post_user = async (action) => {
    return axios.post(BASE_URL + GET_API, action.payload).then((res) => {
        return {
            data: res.data,
            status: res.status
        }
    }).catch((err) => {
        console.log(err);
    })
}

export const delete_user = async (action) => {
    return axios.delete(`http://localhost:3002/posts/${action.payload.id}`).then((res) => {
        return {
            id: action.payload.id,
            status: res.status
        }
    }).catch((err) => {
        console.log(err);
    })
}

export const put_user = async (action) => {
    return axios.put(`http://localhost:3002/posts/${action.payload.id}`,action.payload).then((res) => {
        console.log(action.payload.id, "from api");
        return {
            data: res.data,
            status: res.status,
            index : action.index
        }
    }).catch((err) => {
        console.log(err);
    })
}