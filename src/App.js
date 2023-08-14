import React from 'react';
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import PropertyDetails from './pages/PropertyDetails.js'

const App = () => {
  return (
  <div className='max-w-[1440px] mx-auto bg-grey'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/property/:id' element={<PropertyDetails/>}/>
    </Routes>
  </div>
  );
};

export default App;
