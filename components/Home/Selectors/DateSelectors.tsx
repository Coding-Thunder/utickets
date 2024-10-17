import DatePicker from '@/components/Commmon/DatePicker'
import { format } from 'date-fns'
import React from 'react'

interface Props {
    date: any
    setDate: any
    label: string
}

const DateSelectors: React.FC<Props> = ({ date, setDate, label }) => {
    return (
        <div className='w-full md:w-fit bg-red-400 text-white    flex flex-col gap-2 md:border-r transition-colors cursor-pointer hover:opacity-50 py-2 px-6'>
            <div className='flex justify-center items-center w-fit mb-2'>
                <p>{label}</p>
            </div>
            <div className='ml-4'>
                <DatePicker date={date} setDate={setDate} />

            </div>

            {date && <p className='text-[12px]'>{format(date, "EEE, MMM d, yyyy").split(",")[0]}</p>}
        </div>)
}

export default DateSelectors