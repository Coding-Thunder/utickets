import { combineReducers } from "redux";
import userReducer from "@/redux/user/userSlice";
import flightReducer from "@/redux/flights/flightslice";
import bookingReducer from '@/redux/booking/bookingSlice';


const rootReducer = combineReducers({
    user: userReducer,
    flights: flightReducer,
    booking: bookingReducer,
})

export default rootReducer