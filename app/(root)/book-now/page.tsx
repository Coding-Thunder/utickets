"use client"
import { useSelector, useDispatch } from 'react-redux'; // Combine imports from 'react-redux'
import { useState } from 'react';
import { RootState } from '@/redux/store'; // Ensure this path points to where your store and RootState are defined
import { setSearchCriteria } from '@/redux/flights/flightslice'; // Ensure correct path to your flightSlice
import { SearchCriteria } from '@/lib/types'; // Adjust this path based on where your types are defined

const BookNowPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const dispatch = useDispatch();
  
  // Accessing the search criteria from Redux store
  const searchCriteria = useSelector((state: RootState) => state.flights.searchCriteria);

  // Example function for moving to the next step
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Example function for going back to the previous step
  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Function to submit the booking (final step)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCriteria.fromAirport && searchCriteria.toAirport) {
      // Implement booking logic here
      console.log('Booking flight:', searchCriteria);
    }
  };

  // Example function to update the search criteria using Redux
  const updateSearchCriteria = (newCriteria: SearchCriteria) => {
    dispatch(setSearchCriteria(newCriteria));
  };

  return (
    <div className="book-now-page">
      <h1>Book Now</h1>
      <form onSubmit={handleSubmit}>
        {/* Step-based form logic */}
        {currentStep === 1 && (
          <div>
            <p>From: {searchCriteria.fromAirport ? searchCriteria.fromAirport.name : 'Not selected'}</p>
            <p>To: {searchCriteria.toAirport ? searchCriteria.toAirport.name : 'Not selected'}</p>
            <p>Departure Date: {searchCriteria.departureDate || 'Not selected'}</p>
            <p>Class: {searchCriteria.selectedClass}</p>
            <p>Adults: {searchCriteria.adults}</p>
            <p>Children: {searchCriteria.childrens}</p>
            <p>Infants: {searchCriteria.infants}</p>
          </div>
        )}

        {/* Add additional step logic if necessary */}
        
        <div className="step-controls">
          {currentStep > 1 && (
            <button type="button" onClick={handlePreviousStep}>
              Previous
            </button>
          )}
          <button type="submit" disabled={!searchCriteria.fromAirport || !searchCriteria.toAirport}>
            {currentStep === 1 ? 'Continue' : 'Book Now'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookNowPage;
