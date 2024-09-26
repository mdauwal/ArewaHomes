import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calenderIcon from '../svgs/calender-icon.svg';
import { IoIosArrowDown } from "react-icons/io";

const CalendarDropdown = ({placeholder,width="300px"}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={`max-w-[${width}] md:w-[${width}] border border-black flex items-center bg-white p-2 cursor-pointer`}>
      <img src={calenderIcon} alt='calendar-icon' className={`max-w-[50px] max-h-[50px] md:w-[50px] md:h-[50px]`}/>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText={placeholder}
        className="p-2 w-full focus-visible:outline-none cursor-pointer"
        dateFormat="dd/MM/yyyy"
      />
      <IoIosArrowDown/>
    </div>
  );
};

export default CalendarDropdown;
