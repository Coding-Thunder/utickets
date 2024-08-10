import instance from "./axios.instance"
import endpoints from "./endpoints"
import { EXISTING_USER_LOGIN, REGISTER_A_NEW_USER } from "./interfaces"



const login = async (payload: EXISTING_USER_LOGIN) => {
    return await instance.publicAxiosInstance.post(endpoints.auth.EXISTING_USER_LOGIN, payload)
}


const signup = async (payload: REGISTER_A_NEW_USER) => {
    return await instance.publicAxiosInstance.post(endpoints.auth.REGISTER_A_NEW_USER, payload)
}




const apiService = {
    login,
    signup
}


export default apiService
