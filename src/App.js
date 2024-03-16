import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Param } from './Param.js';
import { Cart } from './Cart';
import { Initial } from './Initial.js';
import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import Body from './Body.js';

export const Api = createContext();

function App()
{
  const [selectedValue, setSelectedValue] = useState('bikes');
  const [root, setRoot] = useState({ arr: {}, end: false });
  const [data, setData] = useState([]);
  const [cartdata, setcartdata] = useState([]);
  const [searchdata, setSearchdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [Trieitem,insTrieitem]=useState([]);
  const [image,setImage]=useState(true);
  useEffect(() => {
     setTimeout(() => {
     setImage(false);
    }, 1000);

   
  }, []);
  useEffect(() => {
    if(selectedValue==="bikes") {
        axios.get('https://asta-39df2-default-rtdb.firebaseio.com/.json')
            .then((response) => {
                if (response.data) {
                    let keys = Object.keys(response.data);
                    let list = keys.map(key => response.data[key]);
                    setData(list);
                    setSearchdata(list);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else if(selectedValue==="cars") {
        axios.get('https://cars-2bc4d-default-rtdb.firebaseio.com/.json')
            .then((response) => {
                if (response.data) {
                    let keys = Object.keys(response.data);
                    let list = keys.map(key => response.data[key]);
                    setData(list);
                    setSearchdata(list);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        axios.get('https://bicycles-5760e-default-rtdb.firebaseio.com/.json')
            .then((response) => {
                if (response.data) {
                    let keys = Object.keys(response.data);
                    let list = keys.map(key => response.data[key]);
                    setData(list);
                    setSearchdata(list);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}, [selectedValue]);

  const sharedValue = {
    data,
    setData,
    searchdata,
    setSearchdata,
    cartdata,
    setcartdata,
    searchTerm,
    setSearchTerm,
    root,
    setRoot,
    Trieitem,
    insTrieitem,
    selectedValue,
     setSelectedValue
  };
  return (
    <div>
      {image ? (
        <div className='h-screen w-full flex animate-pulse justify-center items-center '>
            <Initial />
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Api.Provider value={sharedValue}>
              <Routes>
                <Route path="/" element={<Header />}>
                  <Route index element={<Body />} />
                  <Route path="/param/:name" element={<Param />} />
                  <Route path="/Cart" element={<Cart />} />
                </Route>
              </Routes>
            </Api.Provider>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
