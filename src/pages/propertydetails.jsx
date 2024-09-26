import React, {  Suspense, lazy } from 'react' 
import { MdKeyboardArrowLeft } from "react-icons/md";
import img1 from '../svgs/white1.svg'
import img2 from '../svgs/white2.svg'
import img3 from '../svgs/white3.svg'
import ImageCarousel from '../components/imagecarousel';
import CalendarDropdown from '../components/calenderdropdown';
import { useNavigate } from 'react-router-dom';
// import Mapcomponent from '../components/mapcomponent';
const Mapcomponent = lazy(() => import('../components/mapcomponent'));

const Propertydetails = () => {
  
  const navigate = useNavigate();

  const defaultLocations = [
    { address: 'No.4, Maha Close, Barnawa Kaduna', lat: '10.47661', lng: '7.43039' },
  ];
  // const [address, setAddress] = useState(defaultLocations);
  return (
    <div>
        <div className='flex flex-row justify-between  w-full py-5'>
          <div className='text-left font-unna'>
            <p className='text-base md:text-3xl'>Grey Berry Estate</p>
            <p className='text-xs md:text-sm text-gray-500'>Barnawa, Kaduna</p>
          </div>
          <div className='flex flex-row gap-1 items-center cursor-pointer' onClick={()=>navigate(-1)}>
            <MdKeyboardArrowLeft/>
            Back
          </div>
        </div>
        <div className='details w-full justify-between flex flex-col'>
          <div className='flex flex-col md:flex-row w-full justify-between rowtop'>
            <div className='side1 w-full md:w-[60%]'>
                <ImageCarousel images={[img2,img1,img3]} showLeftArr={false} />
                <div style={{marginTop:"70px", textAlign:'left'}}>
                  <p className='text-3xl font-extrabold'>&#8358;70,000.00<span className='text-xs'>/night</span></p>
                  <p className='text-start'><span className=' pr-5' style={{borderRight:"1px solid black"}}>3 Bedrooms</span><span className=' px-5' style={{borderRight:"1px solid black"}}>3 Bathrooms</span><span className='px-5' style={{borderRight:"1px solid black"}}>3,212 Sqmt</span><span className=' px-5' style={{borderRight:"1px solid black"}}>Swimming pool</span></p>
                </div>
            </div>
            <div className='side2 w-full md:w-[30%] flex flex-col'>
                <div className='flex flex-col w-[90%] mb-20 mt-[30%]' >
                  <div className='flex flex-row gap-2 w-[90%]  pb-[60px] ' style={{borderBottom:"1px solid black"}}>
                    <div>
                      <CalendarDropdown placeholder={"Check in date"} />
                      <CalendarDropdown placeholder={"Check out date"}/>
                    </div>
                    <div>
                      <div className='w-[130px] border border-black p-[6px] bg-white'>
                        <select className="border p-4 w-full focus-visible: outline-none ">
                          <option value="">Adults</option>
                          <option value="option1">1</option>
                          <option value="option2">2</option>
                          <option value="option3">3</option>
                          <option value="option4">4</option>
                          <option value="option5">5</option>
                        </select>
                      </div>
                      <div className='w-[130px] border border-black p-[6px] bg-white'>
                        <select className="border p-4 w-full focus-visible: outline-none ">
                          <option value="">Children</option>
                          <option value="option1">1</option>
                          <option value="option2">2</option>
                          <option value="option3">3</option>
                          <option value="option4">4</option>
                          <option value="option5">5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className='text-start pt-3'>
                    <p>₦1,400,000.00 for 20 nights</p>
                  </div>
                </div>
                
                {/* Note that i done need to call the setAddress here, its just a placeholder for now */}
                <button className='bg-[#00A167] text-white p-3 w-[250px]' onClick={()=>{navigate("/form/paymentbreak")}}>Book Property</button> 
            </div>
          </div>
        
          <div className='rowbottom flex flex-col md:flex-row w-full justify-between'>
              <div className='side1 w-full md:w-[60%]'>
                  <div className='Description mt-5 text-start'>
                    <h3 className='text-start font-bold py-3'>Propert Description</h3>
                    <p className='max-w-[70%] text-start'>
                    Southern Charmer available for sale in HOT EAST COBB area, located right off Alabama rd near Fulton/Cobb border. Shopping, dining, and easy access to 400 or 575! TOP LASSITER High School District! 4 bedrooms, 2 1/2 ba, family room, spacious kitchen with gorgeous granite, office OR Flex room, formal dining AND partial basement. 2 car garage + extra parking on driveway. Brand new paint, new hardwood floors & new carpet!! Relax on your rocking chair front porch, or in your private back yard. Peaceful culdesac in a friendly neighborhood! The house currently has a renter in it. Their lease does not expire till May 1. They are looking to renew and work with the new owners. They are amazing renters and have been there for 2 years
                    </p>
                  </div>
                  <div className='Type text-start' style={{marginTop:'70px'}}>
                    <h3 className='text-start font-bold py-3'>Apartment Type</h3>
                    <p className='max-w-[70%] text-start pb-5' style={{borderBottom:"1px solid black"}}>
                      mansion
                    </p>
                  </div>
                  <div className='Amenities text-start mt-5'>
                    <h3 className='text-start font-bold py-3'>Amenities</h3>
                    <p className='max-w-[70%] text-start pb-5' style={{borderBottom:"1px solid black"}}>
                    Pool, Gym, Basketball Court
                    </p>
                  </div>
                  <div className='Services text-start mt-5'>
                    <h3 className='text-start font-bold py-3'>Apartment Services</h3>
                    <p className='max-w-[40%] text-start pb-5'>
                    Water, Cabel TV, 24hrs Light, Fiber Internet, Security,
                    Smoke Alarms, Air Conditioners, Water Heaterst
                    </p>
                  </div>
              </div>
              <div className='side 2 w-full md:w-[30%]'>
                  <div className='location text-start mt-5'>
                    <h3 className='text-start font-bold py-3'>Location</h3>
                    <p className='max-w-[70%] text-start pb-5'>
                      Kaduna, Nigeria
                    </p>
                    <div className='w-full'>
                    <Suspense fallback={<div>Loading map...</div>}>
                      <Mapcomponent mapHeight='200px' locations={defaultLocations}/>
                    </Suspense>
                    </div>
                  </div>
                  <div className='attractions text-start mt-24 pb-5' style={{borderBottom:"1px solid black"}}>
                    <h3 className='text-start font-bold py-1'>Popular Attractions</h3>
                    <p className='max-w-[70%] text-start'>
                      Kajuru Castle
                    </p>
                    <p className='max-w-[70%] text-start'>
                      Buggati
                    </p>
                    <p className='max-w-[70%] text-start'>
                      Shifu
                    </p>
                  </div>
                  <div className='attractions text-start mt-10 pb-5'>
                    <h3 className='text-start font-bold py-1'>Neighbourhood</h3>
                    <p className='max-w-[70%] text-start'>
                      Church
                    </p>
                    <p className='max-w-[70%] text-start'>
                      Mosque
                    </p>
                    <p className='max-w-[70%] text-start'>
                      Hospital
                    </p>
                    <p className='max-w-[70%] text-start'>
                      Restaurant
                    </p>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Propertydetails