import { GET_USER_PROCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_PROCESS, POST_USER_SUCCESS, POST_USER_ERROR, PUT_USER_PROCESS, PUT_USER_SUCCESS, PUT_USER_ERROR, DELETE_USER_PROCESS, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from "../../../components/user/action/action";

const initialState = {
    user_data: [],
    isLoading: false,
    isError: null,
};

export const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        // GET USER
        case GET_USER_PROCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_USER_SUCCESS: {
            const data = action.data
            return {
                ...state,
                user_data: data
            }
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        //POST USER
        case POST_USER_PROCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case POST_USER_SUCCESS: {
            const data = action.data
            return {
                ...state,
                user_data: state.user_data.concat(data)
            }
        }
        case POST_USER_ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        //DELETE USER
        case DELETE_USER_PROCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case DELETE_USER_SUCCESS: {
            const index = action.index
            state.user_data.splice(index,1)
            return {
                ...state,
            }
        }
        case DELETE_USER_ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        //PUT USER
        case PUT_USER_PROCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case PUT_USER_SUCCESS: {
            const index = action.index
            const data = action.data
            state.user_data.splice(index,1,data)
            return {
                ...state,
            }
        }
        case PUT_USER_ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        default:
            return ({
                name: "User"
            })
    }
}
