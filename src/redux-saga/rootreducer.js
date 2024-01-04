import { combineReducers } from "redux";
import {user_reducer} from "../components/user/reducer/reducer"

const rootReducer = combineReducers({
    user_reducer,
})

export default rootReducer;