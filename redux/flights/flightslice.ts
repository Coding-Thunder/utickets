import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Airport {
    iataCode: string;
    name: string;
    cityName: string;
    countryName: string;
}

interface SearchCriteria {
    fromAirport: Airport | null; // Changed to include airport details
    toAirport: Airport | null; // Changed to include airport details
    departureDate: string | null;
    adults: number;
    childrens: number;
    infants: number;
    selectedClass: string;
}

interface FlightState {
    searchCriteria: SearchCriteria;
}

const initialState: FlightState = {
    searchCriteria: {
        fromAirport: null, // Set to null initially
        toAirport: null, // Set to null initially
        departureDate: null,
        adults: 1,
        childrens: 0,
        infants: 0,
        selectedClass: 'Economy',
    },
};

const flightSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        setSearchCriteria: (state, action: PayloadAction<SearchCriteria>) => {
            state.searchCriteria = action.payload;
        },
    },
});

export const { setSearchCriteria } = flightSlice.actions;
export default flightSlice.reducer;
