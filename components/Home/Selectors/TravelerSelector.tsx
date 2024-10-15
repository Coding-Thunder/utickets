import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

interface Props {
    label: string;
    adults: number;
    setAdults: React.Dispatch<React.SetStateAction<number>>;
    childrens: number;
    setChildrens: React.Dispatch<React.SetStateAction<number>>; // Change here to match usage
    infants: number;
    setInfants: React.Dispatch<React.SetStateAction<number>>;
    selectedClass: string; // Prop for selected class
    setSelectedClass: React.Dispatch<React.SetStateAction<string>>; // Setter for selected class
}

const TravelerSelector: React.FC<Props> = ({
    label,
    adults,
    setAdults,
    childrens,
    setChildrens, // Change here to match props
    infants,
    setInfants,
    selectedClass,
    setSelectedClass,
}) => {
    const [error, setError] = useState<string>(''); // State to hold the error message

    const handleIncreaseInfants = () => {
        if (infants < adults) {
            setInfants(infants + 1);
            setError(''); // Clear error if increment is valid
        } else {
            setError('Infants cannot exceed the number of adults.'); // Set error message
            // Clear the error after 5 seconds
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    return (
        <Popover>
            <PopoverTrigger className='w-fit text-gray-600 bg-white flex flex-col gap-2 md:border-r transition-colors cursor-pointer hover:bg-blue-100 py-2 px-6'>
                <p>{label}</p>
                <div className='py-2 rounded-none w-full font-bold'>
                    {/* Display total travelers */}
                    <p className='flex items-center'>
                        <span className='text-2xl'>{adults + childrens + infants} </span>
                        <span>Traveler(s)</span>
                    </p>
                </div>
                <p className='text-[12px]'>{selectedClass || "Select your travelers"}</p>
            </PopoverTrigger>
            <PopoverContent className='bg-white p-4 rounded-md shadow-lg'>
                <div className='flex flex-col space-y-4'>
                    {/* Adults Section */}
                    <div className='flex justify-between items-center'>
                        <span>Adults (12+ Years)</span>
                        <div className='flex items-center space-x-2'>
                            <Button variant='outline' onClick={() => setAdults(Math.max(1, adults - 1))}>-</Button>
                            <span>{adults}</span>
                            <Button variant='outline' onClick={() => setAdults(adults + 1)}>+</Button>
                        </div>
                    </div>

                    {/* Children Section */}
                    <div className='flex justify-between items-center'>
                        <span>Children (2-12 Years)</span>
                        <div className='flex items-center space-x-2'>
                            <Button variant='outline' onClick={() => setChildrens(Math.max(0, childrens - 1))}>-</Button>
                            <span>{childrens}</span>
                            <Button variant='outline' onClick={() => setChildrens(childrens + 1)}>+</Button>
                        </div>
                    </div>

                    {/* Infants Section */}
                    <div className='flex justify-between items-center'>
                        <span>Infants (0-2 Years)</span>
                        <div className='flex items-center space-x-2'>
                            <Button variant='outline' onClick={() => setInfants(Math.max(0, infants - 1))}>-</Button>
                            <span>{infants}</span>
                            <Button variant='outline' onClick={handleIncreaseInfants}>+</Button>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && <p className='text-red-600 text-sm'>{error}</p>}

                    <hr className='my-2 border-gray-300' />

                    {/* Class Selection Section */}
                    <div>
                        <div className='flex flex-col space-y-2'>
                            {['Economy', 'Premium Economy', 'Business', 'First Class'].map((classOption) => (
                                <label key={classOption} className='flex items-center'>
                                    <input
                                        type='radio'
                                        value={classOption}
                                        checked={selectedClass === classOption}
                                        onChange={() => setSelectedClass(classOption)} // Set the selected class
                                        className='mr-2'
                                    />
                                    {classOption}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default TravelerSelector;
