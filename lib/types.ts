export interface Flight {
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



export interface Airport {
    iataCode: string;
    name: string;
    cityName: string;
    countryName: string;
}

export interface SearchCriteria {
    fromAirport: Airport | null; // Changed to include airport details
    toAirport: Airport | null; // Changed to include airport details
    departureDate: string | null;
    adults: number;
    childrens: number;
    infants: number;
    selectedClass: string;
}

export interface FlightState {
    searchCriteria: SearchCriteria;
}