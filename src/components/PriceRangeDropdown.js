import React, { useContext } from 'react';
import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import {Menu} from '@headlessui/react';
import {useState} from 'react';
import { HouseContext} from './HouseContext'

const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices =[
    {
      value: '$10,000 - $150,000',
    },
    {
      value: '$50,000 - $100,000',
    },
    {
      value: '$30,000 - $50,000',
    },
    {
      value: '$10,000 - $30,000',
    },
  ];

  return (
  <Menu as='div' className='dropdown relative'>
  <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
    <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[13px] text-grey'>Price Range</div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
      </div>
      {
        isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-primary'/>
        ):(
          <RiArrowDownSLine className='dropdown-icon-primary'/>
        )
      }
  </Menu.Button>
  <Menu.Items className='dropdown-menu'>
    {prices.map((price, index)=>
    {
      return(
        <Menu.Item onClick={()=> setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
        {price.value}
        </Menu.Item>
      )
    }) 
    }
  </Menu.Items>
  </Menu>
  )
};

export default PriceRangeDropdown;
