import types from "./types"

const INITIAL_STATE = {
    user: null
}



const userReducer = (state = INITIAL_STATE, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case types.SET_USER:
            return { user: action.payload }
        default:
    }
}


export default userReducer