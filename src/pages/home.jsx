import React, { useContext, useReducer } from 'react'
import Searchinput from '../components/searchinput'
import img1 from '../svgs/white1.svg'
import img2 from '../svgs/white2.svg'
import img3 from '../svgs/white3.svg'
import circle from '../svgs/circle.svg'
import info3 from '../svgs/Shor-term Stay.svg'
import rent from '../svgs/Rent.svg'
import listImg from '../svgs/listhome.svg'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../store/store'

const reducer = (state,action)=>{
  switch (action.type) {
    case "FIRSTIMG":
      return {...state, firstImg:!state.firstImg, showImg1:!state.showImg1};
    case "SECONDIMG":
      return {...state, secondImg:!state.secondImg, showImg2:!state.showImg2};
    case "THIRDIMG":
      return {...state, thirdImg:!state.thirdImg, showImg3:!state.showImg3};
    default:
      return state;
      
  }
}

const Home = () => {
  const initialState = {
    firstImg:false,
    secondImg:false,
    thirdImg:false,
    showImg1:true,
    showImg2:true,
    showImg3:true
  }
  const[state, dispatch] = useReducer(reducer,initialState);

  const navigate = useNavigate();
  const {name} = useContext(AppContext)

  return (
    <>
    <div className='flex flex-col md:flex-row justify-between gap-2'>
        <div className='w-[170px] pt-5 text-start font-unna text-2xl'>
          What would you like to do today?
        </div>
        <Searchinput/>
    </div>
    <div className='mb-[50px] flex flex-col md:flex-row justify-between gap-4 mt-8'>
      <div className='w-full md:w-[30%] cursor-pointer relative ' onClick={()=>dispatch({type:"FIRSTIMG"})}>
        <img src={img1} alt='img1' className={`w-full h-full object-cover filterimg ${state.firstImg && 'filternone'}`}/>
        <img src={circle} alt='circleimg' className={`w-[45px] h-[45px] absolute top-[-20px] right-[-15px] ${state.firstImg && 'hidden'} `}/>
        <div className={`bg-white  absolute top-[68%] p-3 left-[1%] md:left-[30%] ${state.showImg1 && 'hidden'}`} style={{border:"3px solid black"}} >
          <img src={info3} alt='information' className='' onClick={()=>{navigate("/searchbar/shortstay")}}/>
        </div>
        
      </div>
      <div className='w-full md:w-[25%] cursor-pointer relative ' onClick={()=>dispatch({type:"SECONDIMG"})}>
        <img src={img2} alt='img2' className={`w-full h-full object-cover filterimg ${state.secondImg && 'filternone'}`}/>
        <img src={circle} alt='circleimg'  className={`w-[45px] h-[45px] absolute top-[-20px] right-[-15px] ${state.secondImg && 'hidden'} `}/>
        <div className={`bg-white  absolute top-[68%] p-3 left-[30%] ${state.showImg2 && 'hidden'}`} style={{border:"3px solid black"}} >
          <img src={rent} alt='information' className='' onClick={()=>{navigate("/searchbar/availablelisting")}}/>
        </div>
      </div>
      <div className='w-full md:w-[30%] cursor-pointer relative' onClick={()=>dispatch({type:"THIRDIMG"})}>
        <img src={img3}  alt='img3' className={`w-full h-full object-cover filterimg ${state.thirdImg && 'filternone'}`}/>
        <img src={circle} alt='circleimg'  className={`w-[45px] h-[45px] absolute top-[-20px] right-[-15px] ${state.thirdImg && 'hidden'} `}/>
        <img src={listImg} alt='information' className={`absolute top-[68%] p-3 left-[1%] md:left-[30%] ${state.showImg3 && 'hidden'}`} onClick={()=>{navigate("/listedproperties")}}/>
       
      </div>
    </div>
    
    </>
    
  )
}

export default Home

