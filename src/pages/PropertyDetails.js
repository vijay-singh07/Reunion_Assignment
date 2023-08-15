import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section className='bg-white py-10'>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='lg:flex lg:items-center lg:justify-between mb-8'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='flex gap-x-2 text-sm mt-4 lg:mt-0'>
            <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
            <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-600'>{house.price}</div>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-start gap-8'>
          <div className='max-w-[768px] mb-8'>
            <div className='mb-8'>
              <img src={house.image} alt='' />
            </div>
            <div className='flex gap-x-6 text-violet-700'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-white w-full mb-8 border py-6 px-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt='' />
              </div>
              <div className='font-bold text-lg'>{house.agent.name}</div>
              <Link to='' className='text-violet-700 text-sm'>
                View Listings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
