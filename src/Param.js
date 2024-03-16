import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "./App";

export const Param = () => {
  const [vis, setVis] = useState(true);
  const {name} = useParams();
  const shared = useContext(Api);

  useEffect(() => {
    if (shared.cartdata) {
      const a = shared.cartdata.find((item) => item.name === shared.data[name].name);
      if (a === undefined) {
        setVis(true);
      } else {
        setVis(false);
      }
    }
  }, [shared.cartdata, name, shared.data]);

  const addtocart = () => {
    if (shared.data[name]) {
      shared.setcartdata([...shared.cartdata, shared.data[name]]);
      solve();
    }
  };

  const removefromcart = () => {
    if (shared.cartdata) {
      const data = shared.cartdata.filter((it) => it !== shared.data[name]);
      shared.setcartdata(data);
      solve();
    }
  };

  const solve = () => {
    if (name && shared.data[name]) {
      if (shared.cartdata)
       {
        const a = shared.cartdata.find((item) => item.name === shared.data[name].name);
        if (a === undefined) {
          setVis(true);
        } else {
          setVis(false);
        }
      } else {
        console.error("shared.cartdata is not an array");
      }
    }
  };

  if (!name || !shared.data[name]) {
    return (
      <div className="pt-32 h-screen w-full bg-black flex ">
        <div className="h-80 w-80 m-20 bg-slate-800"></div>
        <div className="mt-20 flex flex-col">
          <button className="h-5 w-80 m-3 bg-slate-800 rounded-lg" />
          <button className="h-5 w-40 m-3 bg-slate-800  rounded-lg" />
          <button className="h-5 w-80 m-3 bg-slate-800  rounded-lg" />
          <button className="h-5 w-40 m-3 bg-slate-800  rounded-lg" />
          <button className="h-5 w-80 m-3 bg-slate-800 rounded-lg" />
          <button className="h-5 w-40 m-3 bg-slate-800  rounded-lg" />
          <button className="h-5 w-80 m-3 bg-slate-800  rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 h-full w-full bg-black flex text-slate-300">
      <div>
        <img className="h-[500px] w-[500px] rounded-3xl ml-20 mt-20" src={shared.data[name].img} alt="Product" />
      </div>
      <div className="mt-20 ml-20">
        <h1 className="m-3 text-3xl">{shared.data[name].name}</h1>
        <h1 className="m-3 text-3xl">{shared.data[name].rating}</h1>
        <h1 className="m-3 text-3xl">{shared.data[name].rate}</h1>  
        {vis ? (
        <button className="h-10 w-80 m-3 bg-blue-900 rounded-lg" onClick={addtocart}>
          Add to Cart
        </button>
        
      ) : (
        <button className="h-10 w-80 m-3 bg-slate-800 rounded-lg" onClick={removefromcart}>
          Remove from Cart
        </button>
      )}

    
      </div>
      
    </div>
  );
};
