import React from 'react';
import { Shimmer } from './Shimmer';
import { useContext } from 'react';
import { Api } from './App';
import { Link } from 'react-router-dom';
const Card = ({ item }) => {
  const { img, name, rating } = item;

  
  
  return (
    <div className='m-6 h-80 w-60 flex flex-col items-center justify-center text-white'>
      <img  className='h-60 w-60 rounded-2xl' src={img} alt="Description of the image" />
      <div className='flex flex-wrap justify-between text-center w-full'>
        <div>
          <h1>{name}</h1>
          <h1>{rating}</h1>
        </div>
      </div>
    </div>
  );
};

export const Cart = () => {
  const shared = useContext(Api);

  if (shared.cartdata.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='flex flex-wrap h-full w-full  pt-36 pl-20 pr-20'>
    {shared.cartdata.map((item,id) => (
    
      <Link to={"/param/" + id} key={id}>
        <Card item={item} />
      </Link>
    ))}
  </div>
  
  );
};


