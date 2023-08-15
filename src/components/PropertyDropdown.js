import React, { useContext } from 'react';
import {RiWallet3Line} from 'react-icons/ri';
import {Menu} from '@headlessui/react';
import {useState} from 'react';
import { HouseContext} from './HouseContext'

const PropertyDropdown = () => {
  const {property, setProperty, properties} = useContext(HouseContext);
  
  const [isOpen, setIsOpen] = useState(false);

  return (
  <Menu as='div' className='dropdown relative mb-2 lg:mb-0'>
  <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
    <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[13px] text-grey'>Property type</div>
        <div className='text-[15px] font-medium leading-tight'>{property}</div>
      </div>
  </Menu.Button>
  <Menu.Items className='dropdown-menu'>
    {properties.map((property, index)=>
    {
      return(
        <Menu.Item onClick={()=> setProperty(property)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
        {property}
        </Menu.Item>
      )
    }) 
    }
  </Menu.Items>
  </Menu>
  )
};

export default PropertyDropdown;
