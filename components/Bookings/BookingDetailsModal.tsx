import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaInfoCircle } from 'react-icons/fa';

interface Props {
    isOpen: boolean,
    onOpenChange: () => void
}

const BookingDetailsModal: React.FC<Props> = ({ isOpen, onOpenChange }) => {
    const booking = {
        id: '12345',
        origin: 'JFK',
        destination: 'LAX',
        departureDate: '2024-08-15',
        returnDate: '2024-08-22',
        status: 'Confirmed',
        price: '$199',
        passenger: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1-234-567-8901',
        },
        flightDetails: {
            flightNumber: 'AA1234',
            departureTime: '10:00 AM',
            arrivalTime: '01:00 PM',
        },
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                    <FaInfoCircle className="text-blue-500 text-3xl mr-3" />
                    <DialogTitle className="text-2xl font-bold">Booking Details</DialogTitle>
                </div>
                <DialogDescription className="text-md text-gray-700 mb-8">
                    Here are the details of your booking. You can review all the information below.
                </DialogDescription>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Booking ID</p>
                        <p className="text-lg font-semibold text-gray-900">{booking.id}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">From</p>
                        <p className="text-lg font-semibold text-gray-900">{booking.origin}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">To</p>
                        <p className="text-lg font-semibold text-gray-900">{booking.destination}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Departure Date</p>
                        <p className="text-lg font-semibold text-gray-900">{booking.departureDate}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Return Date</p>
                        <p className="text-lg font-semibold text-gray-900">{booking.returnDate}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Status</p>
                        <p className="text-lg font-semibold text-green-600">{booking.status}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Price</p>
                        <p className="text-lg font-semibold text-gray-900">{booking.price}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Passenger Name</p>
                        <p className="text-lg font-semibold text-gray-900">{booking.passenger.name}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Email</p>
                        <p className="text-lg font-semibold text-gray-900">{booking.passenger.email}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Phone</p>
                        <p className="text-lg font-semibold text-gray-900">{booking.passenger.phone}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-sm font-medium text-gray-600">Flight Details</p>
                        <p className="text-lg font-semibold text-gray-900">
                            {booking.flightDetails.flightNumber} - {booking.flightDetails.departureTime} to {booking.flightDetails.arrivalTime}
                        </p>
                    </div>
                </div>
                <DialogClose asChild>
                    <Button className="mt-8 bg-red-500 text-white rounded-lg px-6 py-3 shadow-lg hover:bg-red-600 transition duration-300">
                        Close
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default BookingDetailsModal;
