import React, {useState, useEffect, createContext} from 'react';
import {housesData} from '../data'

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses,setHouses] = useState(housesData);
  const [country,setCountry] = useState('Select Location');
  const [countries,setCountries] = useState([]);
  const [property,setProperty] = useState('Select Property type');
  const [properties,setProperties] = useState([]);
  const [price,setPrice] = useState('Select Price Range');
  const [date,setDate] = useState('Select Move-in Date');
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house)=>{
      return house.country;
    });
    console.log(allCountries);
    // remove duplicates
    const uniqueCountries = [...new Set(allCountries)]
    console.log(uniqueCountries);

    setCountries(uniqueCountries);
  },[]);

  useEffect(() => {
    const allProperties = houses.map((house)=>{
      return house.type;
    });
    console.log(allProperties);
    // remove duplicates
    const uniqueProperties = [ ...new Set(allProperties)]
    console.log(uniqueProperties);

    setProperties(uniqueProperties);
  },[]);

  const handleClick = () => {
    console.log("clicked");
  };
  return (
  <HouseContext.Provider value={{country,
  setCountry,
  countries,
  property,
  setProperty,
  properties,
  price,
  setPrice,
  date,
  setDate,
  houses,
  loading,
  handleClick,
  }}>
    {children}
  </HouseContext.Provider>);
};

export default HouseContextProvider;