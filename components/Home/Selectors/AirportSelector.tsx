import React, { useEffect, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import apiService from '@/axios/api.service';

interface Airport {
    iataCode: string;
    name: string;
    cityName: string;
    countryName: string;
}

interface Props {
    label: string;
    value: string;
    onSelectAirport: (airport: Airport) => void; // New prop for selecting an airport
    isOpen: boolean; // New prop for controlling popover state
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Setter for popover state
}

const AirportSelector: React.FC<Props> = ({ label, value, onSelectAirport, isOpen, setIsOpen }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [airports, setAirports] = useState<Airport[]>([]);
    const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAirportsData = async () => {
            if (searchTerm.length > 2) {
                setLoading(true);
                try {
                    const { data: airportsData } = await apiService.fetchAirports(searchTerm);
                    if (airportsData && airportsData.length > 0) {
                        const mappedAirports = airportsData.map((airport: any) => ({
                            iataCode: airport.iataCode,
                            name: airport.name,
                            cityName: airport.address.cityName,
                            countryName: airport.address.countryName,
                        }));
                        setAirports(mappedAirports);
                    } else {
                        setAirports([]);
                    }
                } catch (error) {
                    console.error("Error fetching airports:", error);
                    setAirports([]);
                } finally {
                    setLoading(false);
                }
            } else {
                setAirports([]);
            }
        };

        fetchAirportsData();
    }, [searchTerm]);

    // Handle airport selection
    const handleSelectAirport = (airport: Airport) => {
        setSelectedAirport(airport);
        setSearchTerm('');
        setAirports([]);
        onSelectAirport(airport); // Call the passed handler
        setIsOpen(false); // Close the popover when an airport is selected
    };

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className='w-fit text-gray-600 flex flex-col gap-2 md:border-r transition-colors cursor-pointer hover:bg-blue-100 py-2 px-6'>
                <p>{label}</p>
                <div className='py-2 rounded-md text-2xl font-bold'>
                    <p>{selectedAirport ? selectedAirport.cityName : value}</p>
                </div>
                <p className='text-[12px]'>
                    [{selectedAirport ? selectedAirport.iataCode : 'SIN'}] {selectedAirport ? selectedAirport.name : 'Changi Airport'}
                </p>
            </PopoverTrigger>
            <PopoverContent className='bg-white p-4 rounded-md shadow-lg'>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search airports...'
                    className='w-full border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <div className='max-h-60 overflow-y-auto'>
                    {loading ? (
                        <p className='text-gray-500 text-center'>Loading...</p>
                    ) : (
                        airports.length > 0 ? (
                            airports.map((airport) => (
                                <div
                                    key={airport.iataCode}
                                    onClick={() => handleSelectAirport(airport)}
                                    className='cursor-pointer p-2 hover:bg-blue-100 transition-colors duration-200'
                                >
                                    <p className='font-bold'>{airport.name}</p>
                                    <p className='text-sm text-gray-600'>
                                        {airport.cityName}, {airport.countryName} ({airport.iataCode})
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className='text-gray-500'>No airports found</p>
                        )
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default AirportSelector;
