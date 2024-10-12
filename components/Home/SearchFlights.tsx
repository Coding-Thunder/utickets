"use client";
import React, { FormEvent } from 'react';
import AirportSelector from './Selectors/AirportSelector';
import DateSelectors from './Selectors/DateSelectors';
import TravelerSelector from './Selectors/TravelerSelector';
import { useRouter } from 'next/navigation';

const SearchFlights = () => {
    const router = useRouter();
    const [departureDate, setDepartureDate] = React.useState<Date>();
    const [fromAirport, setFromAirport] = React.useState<string>('Singapore'); // Default airport
    const [toAirport, setToAirport] = React.useState<string>('Singapore'); // Default airport
    const [adults, setAdults] = React.useState<number>(1); // Default adults
    const [childrens, setchildrens] = React.useState<number>(0); // Default childrens
    const [infants, setInfants] = React.useState<number>(0); // Default infants
    const [selectedClass, setSelectedClass] = React.useState<string>('Economy'); // Default travel class
    const [fromAirportOpen, setFromAirportOpen] = React.useState(false); // State for From airport popover
    const [toAirportOpen, setToAirportOpen] = React.useState(false); // State for To airport popover

    // Handle the change for the selected airport
    const handleSelectFromAirport = (airport: { iataCode: string; cityName: string; name: string }) => {
        setFromAirport(airport.iataCode);
        setFromAirportOpen(false); // Close popover when an airport is selected
    };

    const handleSelectToAirport = (airport: { iataCode: string; cityName: string; name: string }) => {
        setToAirport(airport.iataCode);
        setToAirportOpen(false); // Close popover when an airport is selected
    };

    // Handle search flights
    const handleSearch = (e:FormEvent) => {
        e.preventDefault()
        // Constructing the query string
        const queryString = new URLSearchParams({
            fromAirport,
            toAirport,
            departureDate: departureDate?.toISOString() || '', // Fallback to an empty string if undefined
            adults: adults.toString(),
            childrens: childrens.toString(),
            infants: infants.toString(), 
            selectedClass,
        }).toString();

        // Navigating to the available flights page with the constructed query string
        router.push(`/available-flights?${queryString}`);
    };

    return (
        <div className="w-fit h-fit p-6 md:p-0 mx-auto text-gray-900 bg-white rounded-lg shadow-lg overflow-hidden">
            <form onSubmit={handleSearch} className='flex flex-col md:flex-row'>
                <AirportSelector
                    label='From'
                    value={fromAirport}
                    onSelectAirport={handleSelectFromAirport}
                    isOpen={fromAirportOpen}
                    setIsOpen={setFromAirportOpen}
                />
                <AirportSelector
                    label='To'
                    value={toAirport}
                    onSelectAirport={handleSelectToAirport}
                    isOpen={toAirportOpen}
                    setIsOpen={setToAirportOpen}
                />
                <DateSelectors
                    label='Departure Date'
                    date={departureDate}
                    setDate={setDepartureDate}
                />
                <TravelerSelector
                    label='Travelers'
                    adults={adults}
                    setAdults={setAdults}
                    childrens={childrens}
                    setchildrens={setchildrens}
                    infants={infants}
                    setInfants={setInfants}
                    selectedClass={selectedClass}
                    setSelectedClass={setSelectedClass}
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Search Flights</button>
            </form>
        </div>
    );
};

export default SearchFlights;
