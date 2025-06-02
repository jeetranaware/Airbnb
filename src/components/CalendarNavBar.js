//calender used in navbar 
import React from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { differenceInDays } from 'date-fns'


const CalendarNavBar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const data = daysCheck;

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    var daysCheck = differenceInDays(endDate, startDate);


    return (
        <div className='calendNavBarHodl mx-auto'>

            <div className='NavBarCalendar'>
                <DateRangePicker color='black' ranges={[selectionRange]} minDate={new Date()} rangeColors={["#black"]} onChange={handleSelect} />
            </div>
        </div>

    )
}

export default CalendarNavBar