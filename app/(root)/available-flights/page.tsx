"use client";
import React, { useEffect, useState, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import apiService from '@/axios/api.service';
import SearchFlights from '@/components/Home/SearchFlights';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LoadingAbsolute from '@/components/Commmon/LoadingAbsolute';
import ErrorPage from '@/components/Commmon/ErrorPage';
import { routings } from '@/lib/utils';
import { useDispatch } from 'react-redux';
import { bookFlight } from '@/redux/booking/bookingSlice';
import { Flight } from '@/lib/types';

// Debounce function to limit the rate of API calls
const debounce = <T extends (...args: any[]) => any>(func: T, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null;
    return (...args: Parameters<T>) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};



const AvailableFlights = () => {
    const searchParams = useSearchParams();
    const dispatch = useDispatch();  // Initialize dispatch


    const fromAirport = searchParams.get('fromAirport') || '';
    const toAirport = searchParams.get('toAirport') || '';
    const departureDate = searchParams.get('departureDate') || '';
    const adults = searchParams.get('adults') || '0';
    const childrens = searchParams.get('childrens') || '0';
    const infants = searchParams.get('infants') || '0';
    const selectedClass = searchParams.get('selectedClass') || '';

    const [flights, setFlights] = useState<Flight[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [carriers, setCarriers] = useState<Record<string, any>>({});
    const [aircrafts, setAircrafts] = useState<Record<string, any>>({});
    const router = useRouter()

    const handleBookNow = (flight: Flight) => {
        // Dispatch the flight details to Redux store
        dispatch(bookFlight(flight));

        // Navigate to the book now page
        router.push(routings.book_now);
    };

    const fetchFlights = useCallback(debounce(async () => {
        if (fromAirport && toAirport && departureDate) {
            setLoading(true);
            try {
                const response = await apiService.fetchAvailableFlights({
                    from: fromAirport,
                    to: toAirport,
                    date: departureDate,
                    adults: Number(adults),
                    children: Number(childrens),
                    infants: Number(infants),
                    classType: selectedClass,
                });

                setCarriers(response.dictionaries.carriers);
                setAircrafts(response.dictionaries.aircraft);
                setFlights(response.data);
            } catch (err) {
                console.error('Error fetching flights:', err);
                setError('Failed to fetch available flights. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    }, 500), [fromAirport, toAirport, departureDate, adults, childrens, infants, selectedClass]);

    useEffect(() => {
        fetchFlights();
    }, [fetchFlights]);


    if (error) return <ErrorPage message={error} />;

    return (
        <div className="w-full mx-auto px-4 min-h-screen max-h-fit">
            {loading && <LoadingAbsolute />}
            <h1 className="text-3xl font-bold mb-6 text-center">Available Flights</h1>

            <div className="p-4 mb-6">
                <SearchFlights />
            </div>

            <div className='w-full mx-auto md:w-[70vw] xl:w-[50vw]'>

                <div className='flex flex-wrap sm:flex-nowrap justify-between p-6'>
                    <p>AIRLINES</p>
                    <p>DURATION</p>
                    <p>DEPARTURE</p>
                    <p>ARRIVE</p>
                    <p>( USD ) Price</p>
                </div>
                {flights.length > 0 ? (
                    <ul className="space-y-6 p-0">
                        {flights.map((flight) => (
                            <React.Fragment key={flight.id}>
                                {/* First <li> block - visible on md and smaller screens */}
                                <li className='block md:hidden'>
                                    <Card className="bg-white shadow-md rounded-md overflow-hidden">
                                        <CardContent className="flex flex-col p-4 ">
                                            <div className="flex justify-between items-center">
                                                <div className='font-semibold'>{carriers[flight.itineraries[0].segments[0].carrierCode]}</div>
                                                <div className="text-sm">{flight.price.currency} {flight.price.base}</div>
                                            </div>

                                            <div className="mt-2 text-sm text-gray-500">
                                                Duration: {flight.itineraries[0].duration.replace('PT', '').replace('H', 'h ')} |
                                                {flight.itineraries[0].segments.length === 1 ? ' Nonstop' : ` ${flight.itineraries[0].segments.length - 1} stop${flight.itineraries[0].segments.length - 1 !== 1 ? 's' : ''}`}
                                            </div>

                                            <div className="mt-2 flex justify-between">
                                                <span>{new Date(flight.itineraries[0].segments[0].departure.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} {flight.itineraries[0].segments[0].departure.iataCode}</span>
                                                <span>{new Date(flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} {flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode}</span>
                                            </div>

                                            <div className="mt-4 flex justify-between items-center">
                                                <p className={`text-sm ${flight.refundable ? 'text-green-600' : 'text-red-600'}`}>
                                                    {flight.refundable ? "Refundable" : "Non-refundable"}
                                                </p>
                                                <Button
                                                    onClick={() => handleBookNow(flight)} // Wrap the function in an arrow function
                                                    className="bg-blue-600 text-white font-bold py-1 px-2 rounded hover:bg-blue-700"
                                                >
                                                    Book Now
                                                </Button>

                                            </div>
                                        </CardContent>
                                    </Card>
                                </li>

                                {/* Second <li> block - visible on md and larger screens */}
                                <li className='hidden md:block'>
                                    <Card className="bg-white border shadow-lg rounded-md overflow-hidden">
                                        <div className="flex flex-wrap sm:flex-nowrap justify-between bg-blue-600 gap-2 text-white p-6">
                                            <div className='w-full md:w-auto'>
                                                <div className='font-semibold'>{carriers[flight.itineraries[0].segments[0].carrierCode]}</div>
                                                <p className="text-sm">{flight.itineraries[0].segments[0].carrierCode}</p>
                                            </div>

                                            <div className="flex flex-col items-center w-full md:w-auto">
                                                <p className="font-medium">
                                                    {flight.itineraries[0].duration.replace('PT', '').replace('H', 'h ')}
                                                </p>
                                                <p className='text-sm'>
                                                    {flight.itineraries[0].segments.length === 1
                                                        ? 'Nonstop'
                                                        : `${flight.itineraries[0].segments.length - 1} stop${flight.itineraries[0].segments.length - 1 !== 1 ? 's' : ''}`}
                                                </p>
                                            </div>

                                            <div className='flex flex-col justify-center items-center w-full md:w-auto'>
                                                <span className="font-semibold">
                                                    {new Date(flight.itineraries[0].segments[0].departure.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                                                </span>
                                            </div>

                                            <div className="flex items-center w-full md:w-auto">
                                                <span className="ml-2 font-medium">
                                                    {flight.itineraries[0].segments.length > 1
                                                        ? new Date(flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
                                                        : new Date(flight.itineraries[0].segments[0].arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                                                </span>
                                            </div>

                                            <div className='flex w-fit gap-2'>
                                                <span>{flight.price.currency}</span>
                                                <span>{flight.price.base}</span>
                                            </div>
                                        </div>

                                        <CardContent className="px-0 py-4">
                                            <div className="flex flex-wrap  justify-center md:justify-between items-center px-4 md:px-12 space-x-2 md:space-x-4 xs:flex-wrap sm:flex-nowrap">
                                                {flight.itineraries[0].segments.map((segment, index) => (
                                                    <React.Fragment key={index}>
                                                        {/* Display the departure iataCode */}
                                                        <span className="font-medium text-sm md:text-2xl">{segment.departure.iataCode}</span>

                                                        {/* Add an arrow */}
                                                        <span className="mx-1 md:mx-2 text-sm md:text-3xl">→</span>

                                                        {/* For the last segment, display the arrival iataCode */}
                                                        {index === flight.itineraries[0].segments.length - 1 && (
                                                            <span className="font-medium text-sm md:text-2xl">{segment.arrival.iataCode}</span>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </div>

                                            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center px-4 md:px-2 space-x-2 md:space-x-4">
                                                <p className={`text-sm ${flight.refundable ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}`}>
                                                    {flight.refundable ? "Refundable" : "Non-refundable"}
                                                </p>

                                                <Button
                                                    onClick={() => handleBookNow(flight)} // Wrap the function in an arrow function
                                                    className="bg-blue-600 text-white font-bold py-1 px-2 rounded hover:bg-blue-700"
                                                >
                                                    Book Now
                                                </Button>

                                            </div>
                                        </CardContent>
                                    </Card>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>

                ) : (
                    <p className="text-center text-lg">
                        {loading ? "Generating best deals for you":"No flights available for the selected criteria"} 
                    </p>
                )}
            </div>
        </div>
    );
};

// Wrap your component in a Suspense boundaryNo flights available for the selected criteria
const AvailableFlightsWrapper = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <AvailableFlights />
        </Suspense>
    );
};

export default AvailableFlightsWrapper;
