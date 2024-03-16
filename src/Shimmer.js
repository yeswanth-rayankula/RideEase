import React from 'react';

const EmptyBox = () => (
  <div className='p-10 h-80 w-80 flex flex-col'>
    <div className=" h-60 w-60 border rounded-2xl border-black bg-slate-800"></div>
  
    <label className='h-4 w-16 rounded-full bg-slate-800 '></label>
       
    
  </div>
);

export const Shimmer = () => {
  const boxes = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9, 9, 9, 8, 8, 8];

  return (
    <div className=" flex flex-wrap bg-black pt-28 pl-20 pr-20">
      {boxes.map((val, index) => (
        <EmptyBox key={index} />
      ))}
    </div>
  );
};
