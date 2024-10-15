import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Flight {
    id: string;
    price: {
        currency: string;
        grandTotal: string;
        base: string;
    };
    itineraries: {
        duration: string;
        segments: {
            departure: {
                iataCode: string;
                at: string;
            };
            arrival: {
                iataCode: string;
                at: string;
            };
            carrierCode: string;
            number: string;
            numberOfStops: number;
        }[];
    }[];
    refundable: boolean;
}

interface BookingState {
    selectedFlight: Flight | null;
}

const initialState: BookingState = {
    selectedFlight: null,
};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        bookFlight: (state, action: PayloadAction<Flight>) => {
            state.selectedFlight = action.payload;
        },
        resetBooking: (state) => {
            state.selectedFlight = null;
        },
    },
});

export const { bookFlight, resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
