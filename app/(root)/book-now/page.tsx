"use client";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Ensure your store is set up correctly
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

const BookNowPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const selectedFlight = useSelector((state: RootState) => state.flight.selectedFlight);
  const carriers = useSelector((state: RootState) => state.flight.carriers); // Assuming carriers are stored in Redux

  // Proceed to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Go back to the previous step
  const previousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Confirm booking action
  const handleConfirmBooking = () => {
    // Handle booking confirmation logic here
    console.log("Booking confirmed");
    router.push('/confirmation'); // Redirect to confirmation page or wherever necessary
  };

  return (
    <div className="p-4">
      {currentStep === 1 && selectedFlight ? (
        <div className="flex flex-col space-y-4">
          <Card className="bg-white shadow-md rounded-md overflow-hidden">
            <CardContent className="flex flex-col p-4">
              <div className="flex justify-between items-center">
                <div className='font-semibold'>{carriers[selectedFlight.itineraries[0].segments[0].carrierCode]}</div>
                <div className="text-sm">{selectedFlight.price.currency} {selectedFlight.price.base}</div>
              </div>

              <div className="mt-2 text-sm text-gray-500">
                Duration: {selectedFlight.itineraries[0].duration.replace('PT', '').replace('H', 'h ')} |
                {selectedFlight.itineraries[0].segments.length === 1 ? ' Nonstop' : ` ${selectedFlight.itineraries[0].segments.length - 1} stop${selectedFlight.itineraries[0].segments.length - 1 !== 1 ? 's' : ''}`}
              </div>

              <div className="mt-2 flex justify-between">
                <span>{new Date(selectedFlight.itineraries[0].segments[0].departure.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} {selectedFlight.itineraries[0].segments[0].departure.iataCode}</span>
                <span>{new Date(selectedFlight.itineraries[0].segments[selectedFlight.itineraries[0].segments.length - 1].arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} {selectedFlight.itineraries[0].segments[selectedFlight.itineraries[0].segments.length - 1].arrival.iataCode}</span>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <p className={`text-sm ${selectedFlight.refundable ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedFlight.refundable ? "Refundable" : "Non-refundable"}
                </p>
                <Button
                  onClick={nextStep} // Move to the next step
                  className="bg-blue-600 text-white font-bold py-1 px-2 rounded hover:bg-blue-700"
                >
                  Confirm Your Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div>
          {/* Other steps of the booking process can be added here */}
          <h2>Step {currentStep}</h2>
          {/* Include additional content or forms for the next steps */}
          <Button onClick={previousStep} className="mt-4">Back</Button>
          <Button onClick={handleConfirmBooking} className="mt-4">Confirm Booking</Button>
        </div>
      )}
    </div>
  );
};

export default BookNowPage;
