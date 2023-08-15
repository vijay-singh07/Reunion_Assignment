import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import { RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import {useState} from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () =>{
    window.location.reload();
  }
  return (
      <header className='py-6 mb-12 border-b rounded border-b-5 border-solid border-gray-300'>
      <div className='flex lg:justify-between justify-start'>
        <div className='container ml-0 flex justify-start item-center gap-6 lg:w-full w-fit'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='px-3 ' />
          </Link>
          <Link to='/' onClick={handleClick} className='hidden lg:flex hover:text-violet-900 hover:bg-violet-200 px-3 py-3 transition'>Rent</Link>
          <Link to='/' className='hidden lg:flex hover:text-violet-900 hover:bg-violet-200 px-3 py-3 transition'>Buy</Link>
          <Link to='/' className='hidden lg:flex hover:text-violet-900 hover:bg-violet-200 px-3 py-3 transition'>Sell</Link>
          <Link to='/' className='hidden lg:flex hover:text-violet-900 hover:bg-violet-200 pr-3 pl-4 py-3 transition text-center item-center'>Manage Property {
        isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-header'/>
        ):(
          <RiArrowDownSLine className='dropdown-icon-header'/>
        )
      }</Link>
          <Link to='/' className='hidden lg:flex  hover:text-violet-900 hover:bg-violet-200 pr-4 pl-4 py-3 transition'>Resources
          {
        isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-header'/>
        ):(
          <RiArrowDownSLine className='dropdown-icon-header'/>
        )}
          </Link>
        </div>
        <div className='ml-6 flex items-center gap-6 lg:text-[16px] text-[10px]'>
          <Link to='/login' className='hover:text-violet-900 py-3 px-3 transition'>
            Log in
          </Link>
          <Link to='/signup' className='bg-violet-500 text-white hover:bg-violet-600 px-3 py-3 rounded-lg flex items-center'>
            Sign Up
          </Link>
        </div>
          </div>
      </header>
  )
};

export default Header;
