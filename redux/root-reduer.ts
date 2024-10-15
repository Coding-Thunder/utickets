import { combineReducers } from "redux";
import userReducer from "@/redux/user/userSlice";
import flightReducer from "@/redux/flights/flightslice";

const rootReducer = combineReducers({
    user: userReducer,
    flights: flightReducer,

})

export default rootReducer