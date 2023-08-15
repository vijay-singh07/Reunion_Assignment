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
    // remove duplicates
    const uniqueCountries = [...new Set(allCountries)]

    setCountries(uniqueCountries);
  },[]);

  useEffect(() => {
    const allProperties = houses.map((house)=>{
      return house.type;
    });
    // remove duplicates
    const uniqueProperties = [ ...new Set(allProperties)]

    setProperties(uniqueProperties);
  },[]);
  
  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(' ').includes('Select');
    };

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);
    const aa = (date.split(' ')[0]);
    const dateA = (aa.split('/')[0]);
    const dateA1 = (aa.split('/')[1]);
    const dateA2 = (aa.split('/')[2])
    const bb = (date.split(' ')[2]);
    const dateB = (bb.split('/')[0]);
    const dateB1 = (bb.split('/')[1]);
    const dateB2 = (bb.split('/')[2])
    const minDate = new Date(dateA1+"/"+dateA+"/"+dateA2);
  const maxDate = new Date(dateB1+"/"+dateB+"/"+dateB2);

    const newHouses = housesData.filter((house)=>{
      const housePrice = (parseInt(house.price));
      const dd = ((house.date).split(' ')[0]);
      const houseDate0 = (dd.split('/')[0]);
      const houseDate1 = (dd.split('/')[1]);
      const houseDate2 = (dd.split('/')[2]);
      const houseDate = new Date(houseDate1+"/"+houseDate0+"/"+houseDate2);
      if(
        house.country === country && house.type === property && housePrice >=minPrice && housePrice <=maxPrice && houseDate >= minDate && houseDate <= maxDate
      ){
        return house;
      }
      if (!isDefault(country)&& isDefault(property)&& isDefault(price)&& isDefault(date)){
        return house.country === country;
      }
      if (isDefault(country)&& !isDefault(property)&& isDefault(price)&& isDefault(date)){
        return house.type === property;
      }
      if (isDefault(country)&& isDefault(property)&& !isDefault(price)&& isDefault(date)){
        if(housePrice >=minPrice && housePrice <=maxPrice){
          return house;
        }
      }
      if (isDefault(country)&& isDefault(property)&& isDefault(price)&& !isDefault(date)){
        if(houseDate >= minDate && houseDate <= maxDate){
          return house;
        }
      }
      if (!isDefault(country)&& !isDefault(property)&& isDefault(price)&& isDefault(date)){
          return house.country === country && house.type === property;
      }
      if (isDefault(country)&& !isDefault(property)&& !isDefault(price)&& isDefault(date)){
        if(housePrice >=minPrice && housePrice <=maxPrice){
          return house.type === property;
        }
      }
      if (isDefault(country)&& isDefault(property)&& !isDefault(price)&& !isDefault(date)){
        return housePrice >=minPrice && housePrice <=maxPrice && houseDate >= minDate && houseDate <= maxDate;
      }
    });
    setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]): 
      setHouses(newHouses),
      setLoading(false)
    },1000);
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