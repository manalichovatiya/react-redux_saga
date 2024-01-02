import { GET_USER_PROCESS, GET_USER_ERROR, GET_USER_SUCCESS } from "../action/action";


const initialState = {
    viewer_data: [],
    isLoading: false,
    isError: null,
};


const user_reducer = (state = initialState, action) => {
    console.log(action, "Data from reducer");
    switch (action.type) {
        case GET_USER_PROCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_USER_SUCCESS: {
            const data = action.data
            return {
                viewer_data: data
            }
        }
        case GET_USER_ERROR: {
            const data = action.data
            return {
                ...state,
                isError: true,
                isLoading: false,
                data
            }
        }
        default:
            return ({
                name: "Hello"
            })
            break;
    }
}

export default user_reducer