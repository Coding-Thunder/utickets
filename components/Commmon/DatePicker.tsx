"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface Props {
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
    date: any
}
const DatePicker: React.FC<Props> = ({ setDate, date }) => {

    return (
        <Popover>
            {!date ? (
                < PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-fit justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span className="text-sm">Pick a date</span>
                    </Button>
                </PopoverTrigger>
            ) : (
                <PopoverTrigger>
                    <>
                        <div className='flex justify-start items-center gap-2'>
                            <p className='font-bold text-3xl'>
                                {format(date, "EEE, MMM d, yyyy").split(",")[1].split(" ")[2]}
                            </p>
                            <p>
                                {format(date, "EEE, MMM d, yyyy").split(",")[1].split(" ")[1]}{", "}{format(date, "EEE, MMM d, yyyy").split(",")[2]}
                            </p>
                        </div>

                    </>
                </PopoverTrigger>
            )
            }
            <PopoverContent className="w-auto p-0 bg-white">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover >
    )
}

export default DatePicker