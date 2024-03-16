import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import { Shimmer } from './Shimmer.js';
import { Api } from './App.js';
import { Trie } from './Trie.js';
 const Body = () => {
 
  const shared= useContext(Api);
 
  const Card = (props) => {
    const { img, name, rate } = props.item;
   
    return (
      <div className=' h-80 w-80  items-center justify-center flex flex-col  text-white'>
        <img className='h-60 w-60 hover:h-64 hover:w-64 rounded-2xl' src={img} alt="Description of the image" />
  
        <div className='flex flex-wrap justify-around w-full pt-1 '>
          <h1>{name}</h1>
          <h1 className='h-9 w-12 '>{rate}</h1>
        </div>
      </div>
    );
  };

  if (!shared.cartdata || shared.data.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className='flex flex-wrap h-full  w-full pt-36  pl-20 pr-20'>
     {
       shared.data.map((item,id) => (
        <div >
            <Link to={`/param/`+id} key={id}>
                  <Card item={item} />
            </Link>
            <Trie name={item.name}/>
      </div> 
          ))
    }
    </div>
  );
}
export default Body;