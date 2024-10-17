import { FlightState, SearchCriteria } from '@/lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


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
