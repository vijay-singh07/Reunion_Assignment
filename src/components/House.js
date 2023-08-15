import React from 'react';
import {BiBed, BiBath, BiArea} from 'react-icons/bi';

const House = ({house}) => {
  if (!house) {
    return <div>No house data available</div>;
  }
  const {image,country,address, bedrooms, bathrooms, surface, price}= house;
  return (
  <div className='bg-white shadow-1 p-5 mb-5 rounded-lg rounded-tl[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl hover:translate-y-1.5 transition'>
    <img className='mb-8' src={image} alt=''/>
    <div className='flex gap-x-2 text-sm'>
      <div className='rounded-full text-violet-500 px-3'><b><span>$</span>{price} </b><span className='text-[13px]'>/month</span></div>
    </div>
    <div className=' rounded-full text-2xl px-3'><b>{country}</b></div>
    <div className='text-[12px] px-3 font-semibold text-gray-400 max-w-[260px]'>
    {address}
    </div>
    <div className='flex gap-x-4 px-3 my-4'>
      <div className='flex item-center text-gray-600 gap-1 bg-white'>
        <div className='text-[20px]'>
          <BiBed/>
        </div>
        <div>{bedrooms}</div>
      </div>
      <div className='flex item-center text-gray-600 gap-1'>
        <div className='text-[20px]'>
          <BiBath/>
        </div>
        <div>{bathrooms}</div>
      </div>
      <div className='flex item-center text-gray-600 gap-1'>
        <div className='text-[20px]'>
          <BiArea/>
        </div>
        <div>{surface}</div>
      </div>
    </div>
  </div>)
};

export default House;
