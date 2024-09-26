import React, { useState } from 'react'
import nobooking from '../svgs/nobook.svg'
import nohoom from '../svgs/nohome.svg'
import Zerodata from '../components/zerodata'
import TenancyDetails from "../components/PaymentInfo/TenancyDetails.js"
import TourRequest from "../components/PaymentInfo/ToureRequest.js"
import { useNavigate } from 'react-router-dom'

const Listedproperties = () => {
    const [display, setDisplay] = useState(<PropertiesPage/>)
    const [active, setActive] = useState("Properties");
    const navigate = useNavigate()

    const handleSubmit = (content,buttonName)=>{
        setDisplay(content)
        setActive(buttonName)
    }

    return(
        <>
        <div>
            <div className='flex flex-row justify-between font-unna border-b border-b-gray-400 mt-10 pb-5 items-center'>
                <p>Your listed properties</p>
                <button className='bg-black py-3 px-6 font-unna text-white' onClick={()=>navigate("/form/listingtype")}>Add a new Listing</button>
            </div>
        </div>
        <div className="h-auto font-unna">
            <div className="w-[100%] pt-7">
                <nav className="flex flex-row  ">
                    <button onClick={()=>handleSubmit(<PropertiesPage/>,"Properties")} className={`mr-1 px-1 md:px-4 md:mr-20 ${active === "Properties" ? "border-[#000] border-b-4 text-black":"text-gray-600"}`}>Properties</button>
                    <button onClick={()=>handleSubmit(<TourPage/>,"Tour")} className={`mr-5 px-4 md:mr-20 ${active === "Tour" ? "border-[#000] border-b-4 text-black":"text-gray-600"}`}>Tour Request</button>
                    <button onClick={()=>handleSubmit(<PaymentPage/>,"Payments")} className={`mr-5 px-4 md:mr-20 ${active === "Payments" ? "border-[#000] border-b-4 text-black":"text-gray-600"}`}>Payments</button>
                </nav>
            </div>
            <div className="flex flex-wrap md:flex-row mx-auto sm:justify-center justify-between gap-7 p-5 pb-20" style={{borderTop:"1px solid #9ca3af"}}>
                {display}
            </div>
        </div>
        </>
    )
}

function PropertiesPage(){
    const data = false
    return(
        <>
            {data? <TenancyDetails /> : <Zerodata image={nohoom} message={"You do not have a home listed yet."} btnTxt={"Add a new Listing"}/> }
        </>
    )
}

function PaymentPage(){
    const data = true
    return(
        <>
           {data? <TourRequest /> : <Zerodata image={nohoom} message={"You do not have a home listed yet."} btnTxt={"Add a new Listing"}/> }
                                                        
        </>
    )
}

function TourPage(){
    const data = true
    return(
        <div>
              {data? <TenancyDetails /> : <Zerodata image={nobooking} message={"No one has booked a tour request yet."} btnTxt={null}/> }
        </div>
    )
}

export default Listedproperties