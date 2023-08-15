import React from 'react';
import { useContext } from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import WhenDropdown from './WhenDropdown';
import { HouseContext } from './HouseContext';

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className='container px-[30px] py-6 px-3 max-w-{1170px} mx-auto flex flex-col lg:flex-row justify-between lg:gap-x-3 relative lg:top-4 lg:shadow-1 bg-white rounded'>
    <CountryDropdown/>
    <WhenDropdown/>
    <PriceRangeDropdown/>
    <PropertyDropdown/>
    <button onClick={()=>handleClick()} className='bg-violet-500 hover:bg-violet-600 text-white transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-lg'>
      Search
    </button>
    </div>
    )
};

export default Search;
