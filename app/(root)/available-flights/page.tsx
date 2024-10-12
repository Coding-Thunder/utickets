"use client";
import React, { useEffect, useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import apiService from '@/axios/api.service';
import SearchFlights from '@/components/Home/SearchFlights';
import { AiOutlineClockCircle, AiOutlineArrowRight } from 'react-icons/ai';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAirlineName } from '@/lib/utils';

// Your debounce function and Flight interface remain the same.
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

interface Flight {
    id: string;
    price: {
        currency: string;
        grandTotal: string;
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


const AvailableFlights = () => {
    const searchParams = useSearchParams();

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

    const fetchFlights = useCallback(debounce(async () => {
        if (fromAirport && toAirport && departureDate) {
            setLoading(true);
            try {
                const {data} = await apiService.fetchAvailableFlights({
                    from: fromAirport,
                    to: toAirport,
                    date: departureDate,
                    adults: Number(adults),
                    children: Number(childrens),
                    infants: Number(infants),
                    classType: selectedClass,
                });
                setFlights(data);
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

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) return <p className="text-center text-lg">Loading flights...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;

    return (
        <div className="w-full mx-auto px-4 bg-gradient-to-r from-blue-100 to-blue-300">
            <h1 className="text-3xl font-bold mb-6 text-center">Available Flights</h1>

            <div className="p-4 mb-6">
                <SearchFlights />
            </div>

            <div className='w-[50vw] mx-auto'>
                {flights.length > 0 ? (
                    <ul className="space-y-6">
                        {flights.map((flight) => (
                            <li key={flight.id}>
                                <Card className="bg-white border shadow-lg p-2 w-full transition duration-300 ease-in-out transform hover:scale-105">
                                    <CardHeader className="flex items-center justify-between">
                                        <div className="flex flex-col w-full">
                                            <CardTitle className="text-xl font-semibold">{getAirlineName(flight.itineraries[0].segments[0].carrierCode)}</CardTitle>
                                            <p className="text-sm text-gray-500">{flight.itineraries[0].segments[0].carrierCode}</p>
                                        </div>
                                        <div className="text-lg font-bold w-full flex justify-between items-center">
                                            <p>
                                                {flight.price.currency} {flight.price.grandTotal}
                                            </p>
                                            <Button className="bg-blue-600 hover:bg-blue-500 ml-4">
                                                Book Now
                                            </Button>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="px-0 py-4">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col">
                                                <div className="flex items-center">
                                                    <span className="font-medium">{flight.itineraries[0].segments[0].departure.iataCode}</span>
                                                    <AiOutlineClockCircle className="mx-2" />
                                                    <span className="font-medium">{new Date(flight.itineraries[0].segments[0].departure.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                    <AiOutlineArrowRight className="mx-2" />
                                                    <span className="font-medium">{flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode}</span>
                                                    <span className="ml-2 font-medium">{new Date(flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                </div>
                                                <p className="text-sm text-gray-600">{formatDate(departureDate)}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-sm font-medium">
                                                    {flight.itineraries[0].duration.replace('PT', '').replace('H', 'h ')}
                                                    {flight.itineraries[0].segments[0].numberOfStops} stop{flight.itineraries[0].segments[0].numberOfStops !== 1 ? 's' : ''}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className="font-medium">{flight.itineraries[0].segments[0].arrival.iataCode}</span>
                                                <span className="font-medium">{new Date(flight.itineraries[0].segments[0].arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className={`text-sm ${flight.refundable ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}`}>
                                                {flight.refundable ? "Refundable" : "Non-refundable"}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-lg">No flights available for the selected criteria.</p>
                )}
            </div>
        </div>
    );
};

// Wrap your component in a Suspense boundary
const AvailableFlightsWrapper = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <AvailableFlights />
        </Suspense>
    );
};

export default AvailableFlightsWrapper;
