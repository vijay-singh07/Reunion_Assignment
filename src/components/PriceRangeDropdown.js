import React, { useContext } from 'react';
import {RiWallet3Line} from 'react-icons/ri';
import {Menu} from '@headlessui/react';
import {useState} from 'react';
import { HouseContext} from './HouseContext'

const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices =[
    {
      value: '10000 - 150000',
    },
    {
      value: '50000 - 100000',
    },
    {
      value: '30000 - 50000',
    },
    {
      value: '10000 - 30000',
    },
  ];

  return (
  <Menu as='div' className='dropdown relative mb-2 lg:mb-0'>
  <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
    <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[13px] text-grey'>Price Range</div>
        <div className='text-[15px] font-medium leading-tight'><span>$</span>{price}</div>
      </div>
  </Menu.Button>
  <Menu.Items className='dropdown-menu'>
    {prices.map((price, index)=>
    {
      return(
        <Menu.Item onClick={()=> setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
        <span>$</span>{price.value}
        </Menu.Item>
      )
    }) 
    }
  </Menu.Items>
  </Menu>
  )
};

export default PriceRangeDropdown;
