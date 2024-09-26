import React from 'react'

const Zerodata = ({image,message,btnTxt}) => {
  return (
    <div>
        <img src={image} alt='no data'/>
        <p className='my-10 text-xl'>{message}</p>
        {btnTxt === "" || btnTxt === null ? "" : <button className='bg-black py-3 px-6 font-unna text-white'>{btnTxt}</button> }
        
    </div>
  )
}

export default Zerodata