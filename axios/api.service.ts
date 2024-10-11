import instance from "./axios.instance"
import endpoints from "./endpoints"
import { EXISTING_USER_LOGIN, REGISTER_A_NEW_USER } from "./interfaces"



const login = async (payload: EXISTING_USER_LOGIN) => {
    return await instance.publicAxiosInstance.post(endpoints.auth.EXISTING_USER_LOGIN, payload)
}


const signup = async (payload: REGISTER_A_NEW_USER) => {
    return await instance.publicAxiosInstance.post(endpoints.auth.REGISTER_A_NEW_USER, payload)
}




// Function to fetch airports from the API
const fetchAirports = async (query: string) => {
    try {
        const response = await instance.publicAxiosInstance.get('/amadeus/airports', {
            params: {
                keyword: query,  // Pass the search keyword
                subType: 'AIRPORT',  // Define the subType as 'AIRPORT'
                page: 0  // Optionally, pass the page number (default to 0)
            }
        });
        return response.data
    } catch (error) {
        console.error('Error fetching airports:', error);
    }
};

// In your apiService file
const fetchAvailableFlights = async (searchParams: {
    from: string;
    to: string;
    date: string;
    adults: number;
    children: number;
    infants: number;
    classType: string;
}) => {
    try {
        const response = await instance.publicAxiosInstance.get('/amadeus/search-flights', { params: searchParams });
        return response.data; // Adjust this based on your API response structure
    } catch (error) {
        console.error('Error fetching available flights:', error);
        throw error; // Rethrow error to be handled by the caller
    }
};


const apiService = {
    login,
    signup,
    fetchAirports,
    fetchAvailableFlights
}


export default apiService
