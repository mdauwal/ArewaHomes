import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calenderIcon from '../svgs/calender-icon.svg';
import iconwhite from '../svgs/white3dmodeling.svg';
import { IoIosArrowDown } from "react-icons/io";

const CalendarDropdown2 = ({placeholder,width="300px",icon=calenderIcon,p='p-2',hoverbg = "white",changeIcon=true,styles={}, onClick}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`max-w-[${width}] md:w-[${width}] border border-black flex items-center bg-white ${p} gap-4 cursor-pointer`} 
    style={{
      ...styles,
      backgroundColor: isHovered ? `${hoverbg}` : 'white',
      transition: 'background-color 0.3s ease'
    }}
    onClick={onClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>

      <img src={icon} alt='calendar-icon' className={`max-w-[50px] max-h-[50px] md:w-[50px] md:h-[50px] ${isHovered && changeIcon? 'hidden': ''}`}/>
      <img src={iconwhite} alt='icon2' className={`max-w-[50px] max-h-[50px] md:w-[50px] md:h-[50px] ${isHovered && changeIcon? '':'hidden'}`}/>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText={placeholder}
        className="p-2 w-full focus-visible:outline-none bg-transparent text-gray-600 cursor-pointer"
        dateFormat="dd/MM/yyyy"
      />
      <IoIosArrowDown/>
    </div>
  );
};
export default CalendarDropdown2;




// export const CalendarDropdown3 = ({placeholder,width="300px"}) => {
//     const [selectedDate, setSelectedDate] = useState(null);
  
//     const handleDateChange = (date) => {
//       setSelectedDate(date);
//     };

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//       };
    
//       const handleMouseLeave = () => {
//         setIsHovered(false);
//       };
  
//     return (
//       <div className={`max-w-[${width}] md:w-[${width}] border border-black flex items-center bg-white p-2`}>
//         <img src={calenderIcon} alt='calendar-icon' className={`max-w-[50px] max-h-[50px] md:w-[50px] md:h-[50px]`}/>
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           placeholderText={placeholder}
//           className="p-2 w-full focus-visible:outline-none"
//           dateFormat="dd/MM/yyyy"
//         />
//         <IoIosArrowDown/>
//       </div>
//     );
//   };
  
