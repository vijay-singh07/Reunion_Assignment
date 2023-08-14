import React from 'react';
import Search from '../components/Search'

const Heading = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl-mb-24'>
            <div className='container ml-0 flex justify-between'>
            <h1 className='text-4xl  font-semibond leading-none'><b>Search properties to rent</b></h1>
          <div className='flex  item-center pl-60 gap-6'>
          <select name="Search Bar"  className='px-3 py-2'>
                <option value="Search with Search Bar">Search with Search Bar</option>
              </select>
          </div>
        </div>
        <Search/>
    </section>
  )
};

export default Heading;
