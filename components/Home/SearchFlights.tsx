"use client";
import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import AirportSelector from './Selectors/AirportSelector';
import DateSelectors from './Selectors/DateSelectors';
import TravelerSelector from './Selectors/TravelerSelector';
import { setSearchCriteria } from '@/redux/flights/flightslice';
import { AdvertisementModal } from '../Commmon/AdvertisementModal';

// Define the Airport interface
interface Airport {
    iataCode: string;
    cityName: string;
    name: string;
    countryName: string; // Ensure countryName is included
}

// Define the SearchCriteria interface
interface SearchCriteria {
    fromAirport: Airport | null;
    toAirport: Airport | null;
    departureDate: string;
    adults: number;
    childrens: number;
    infants: number;
    selectedClass: string;
}

const SearchFlights = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { searchCriteria } = useSelector((state: any) => state.flights);

    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [departureDate, setDepartureDate] = React.useState<Date | null>(searchCriteria.departureDate ? new Date(searchCriteria.departureDate) : null);
    const [fromAirport, setFromAirport] = React.useState<Airport | null>(searchCriteria.fromAirport);
    const [toAirport, setToAirport] = React.useState<Airport | null>(searchCriteria.toAirport);
    const [adults, setAdults] = React.useState<number>(searchCriteria.adults);
    const [childrens, setChildrens] = React.useState<number>(searchCriteria.childrens);
    const [infants, setInfants] = React.useState<number>(searchCriteria.infants);
    const [selectedClass, setSelectedClass] = React.useState<string>(searchCriteria.selectedClass);

    const [fromAirportOpen, setFromAirportOpen] = React.useState(false);
    const [toAirportOpen, setToAirportOpen] = React.useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSelectFromAirport = (airport: Airport) => {
        openModal()
        setFromAirport(airport);
        setFromAirportOpen(false);
    };

    const handleSelectToAirport = (airport: Airport) => {
        setToAirport(airport);
        setToAirportOpen(false);
    };


    const handleSearch = (e: FormEvent) => {
        e.preventDefault();

        const newSearchCriteria: SearchCriteria = {
            fromAirport,
            toAirport,
            departureDate: departureDate ? departureDate.toISOString() : '',
            adults,
            childrens,
            infants,
            selectedClass,
        };

        dispatch(setSearchCriteria(newSearchCriteria));

        const queryString = new URLSearchParams({
            fromAirport: fromAirport?.iataCode || '',
            toAirport: toAirport?.iataCode || '',
            departureDate: departureDate ? departureDate.toISOString() : '',
            adults: adults.toString(),
            childrens: childrens.toString(),
            infants: infants.toString(),
            selectedClass,
        }).toString();

        router.push(`/available-flights?${queryString}`);
    };

    return (
        <div className="w-fit h-fit p-6 md:p-0 mx-auto text-gray-900 bg-white rounded-lg shadow-lg overflow-hidden">
            <form onSubmit={handleSearch} className='flex flex-col md:flex-row'>
                <AirportSelector
                    label='From'
                    value={fromAirport ? `${fromAirport.cityName} (${fromAirport.iataCode})` : 'Select an airport'}
                    onSelectAirport={handleSelectFromAirport}
                    isOpen={fromAirportOpen}
                    setIsOpen={setFromAirportOpen}
                />
                <AirportSelector
                    label='To'
                    value={toAirport ? `${toAirport.cityName} (${toAirport.iataCode})` : 'Select an airport'}
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
                    setChildrens={setChildrens}
                    infants={infants}
                    setInfants={setInfants}
                    selectedClass={selectedClass}
                    setSelectedClass={setSelectedClass}
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Search Flights</button>
            </form>
            <AdvertisementModal isOpen={isModalOpen} openModal={openModal} closeModal={closeModal} />
        </div>
    );
};

export default SearchFlights;
