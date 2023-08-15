import React, { useContext } from 'react';
import {RiWallet3Line} from 'react-icons/ri';
import {Menu} from '@headlessui/react';
import {useState} from 'react';
import { HouseContext} from './HouseContext'

const WhenDropdown = () => {
  const {date, setDate} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const dates =[
    {
      value: '01/07/2023 - 31/08/2023',
    },
    {
      value: '01/09/2023 - 31/10/2023',
    },
    {
      value: '01/11/2023 - 31/12/2023',
    },
    {
      value: '01/06/2023 - 31/07/2023',
    },
  ];

  return (
  <Menu as='div' className='dropdown relative mb-2 lg:mb-0'>
  <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full  text-left'>
    <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[13px] text-grey'>When</div>
        <div className='text-[15px] font-medium leading-tight'>{date}</div>
      </div>
  </Menu.Button>
  <Menu.Items className='dropdown-menu'>
    {dates.map((date, index)=>
    {
      return(
        <Menu.Item onClick={()=> setDate(date.value)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
        {date.value}
        </Menu.Item>
      )
    }) 
    }
  </Menu.Items>
  </Menu>
  )
};

export default WhenDropdown;
