import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
      <header className='py-6 mb-12 border-b'>
        <div className='container ml-0 flex justify-between item-center '>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='px-3 ' />
          </Link>
          <Link to='/' className='hover:text-violet-900 hover:bg-violet-200 px-3 py-3 transition'>Rent</Link>
          <Link to='/' className='hover:text-violet-900 hover:bg-violet-200 px-3 py-3 transition'>Buy</Link>
          <Link to='/' className='hover:text-violet-900 hover:bg-violet-200 px-3 py-3 transition'>Sell</Link>
          <Link to='/' className='hover:text-violet-900 hover:bg-violet-200 px-3 py-3 transition'>Manage Property</Link>
          <Link to='/' className='hover:text-violet-900 hover:bg-violet-200 px-3 py-3 transition'>Resources</Link>
          <div className='flex  item-center pl-60 gap-6'>
            <Link to='/' className='hover:text-violet-900 px-3 py-3 transition'>Log in</Link>
            <Link to='/' className='bg-violet-500 text-white hover:bg-violet-600 px-3 py-3 rounded-lg item-center'>Sign Up</Link>
          </div>
        </div>
      </header>
  )
};

export default Header;
