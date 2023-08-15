import React from 'react';
import Search from '../components/Search';

const Heading = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl-mb-24'>
      <div className='flex flex-col lg:flex-row justify-between items-center lg:px-8 lg:py-4 container mx-auto'>
        <h1 className='lg:text-4xl text-xl font-semibold leading-none mb-4 lg:mb-0'>
          <b>Search properties to rent</b>
        </h1>
        <div className='lg:ml-6 flex flex-col lg:flex-row gap-2'>
          <select name='Search Bar' className='px-4 lg:py-2 mb-2 rounded'>
            <option value='Search with Search Bar'>Search with Search Bar</option>
          </select>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Heading;
