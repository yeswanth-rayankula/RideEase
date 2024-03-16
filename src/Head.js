import { Link } from "react-router-dom";
import { useState, useContext,useEffect } from "react";
import { Api } from "./App";
import { SvgIcon } from '@mui/material';
import bikeIcon from '@mui/icons-material/DirectionsBikeOutlined';
import homeIcon from '@mui/icons-material/CottageOutlined';
import cartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { blue } from '@mui/material/colors';
export const Head = () => {
  
  const shared = useContext(Api);
  const searchTerm=shared.searchTerm;
  const setSearchTerm=shared.setSearchTerm;
  const [ans, setAns] = useState([]);
  const root=shared.root;
  const Trieitem=shared.Trieitem;
  const insTrieitem=shared.insTrieitem;

const selectedValue=shared.selectedValue;
const setSelectedValue=shared.setSelectedValue;
   
     const handleSelectChange = (event) => {
       setSelectedValue(event.target.value);
     };

     const getRes = (cur, s, solution) => {
      if (cur.end) {
         
          solution.push(s);
      }
      for (let char in cur.arr) {
         getRes(cur.arr[char], s+ char, solution);
      }
  };
    useEffect(()=>
    {
     if(searchTerm==="")
      return;
   
    let s=searchTerm.toLowerCase().replace(/\s/g, '');
    let cur = root;
    let i=0;
    let solution=[]
    for (;i<s.length;i++) 
    {
      if (!cur.arr[s[i]]) {
          break;
      }
      cur = cur.arr[s[i]];
    }
    
    if(i==s.length)
    {
    
       getRes(cur, s, solution);
       insTrieitem([...solution]);
    }
    else
    {
      insTrieitem([]);
    }
 

},[searchTerm]) 



  const searching = (event) => {
    if(event.key==='Enter')
    {
      insTrieitem([]);
    const filtered = shared.searchdata.filter(dataItem =>
      dataItem.name.toLowerCase().replace(/\s/g, '').includes(searchTerm.toLowerCase())
    );
 
    shared.setData(filtered);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const fun = (yas) => {
    setSearchTerm(String(yas).trimStart());
  };
  function func(item) {
    setSearchTerm(item);
    
   }
  return (
    <div className="justify-between  fixed h-32 w-full text-white border border-blue-950  flex bg-slate-950">
      <div className="flex flex-row ml-20 pt-9 sm:ml-5 md:ml-8">
      <img className="h-14 w-14 sm:h-10 sm:w-10" src='/bike-rental.png' alt="Bike Rental Logo" />

           <h1 className=" text-5xl sm:text-2xl md:text-2xl  text-slate-300">RideEase</h1>
      </div>
      <div className="justify-evenly mt-7 mr-36 text-2xl flex flex-row sm:mr-5 md:mr-9">
               
                      <div className="flex flex-col m-2 ">
                              <input
                                 type="text"
                                 placeholder=" Search"
                                 value={searchTerm}
                                 onChange={(e) =>fun(e.target.value) }
                                 className="bg-white text-black h-10 w-[500px] sm:w-[300px]  md:w-[300px]  border border-black pl-3"
                                 onKeyPress={searching}
                              />
    
                             <div className=" w-[300px] relative flex flex-col ">
                             {
                                    searchTerm!=="" && Trieitem.map((item) => (
                                    <h1 onClick={() => func(item)} className="h-10  w-[500px] bg-slate-300   text-black">{item}</h1>
                                    ))
                             }
                              </div>
                      </div >
                              <div className="flex flex-row m-3 sm:hidden md:hidden">
                                         <Link to="/">
                                            <SvgIcon sx={{ color: blue[900], width: '28px', height: '28px' }} component={homeIcon} />
                                            </Link>
                                         <h1 className="hover:text-blue-300">
                                             <Link to="/">Home</Link>
                                        </h1>
                             </div>
                           <div className=" flex flex-row m-3 sm:hidden md:hidden">
                              <Link to="/Cart"><SvgIcon   sx={{ color: blue[900], width: '28px', height: '28px' }} component={cartIcon}   /></Link>
                              <h1 className=" hover:text-blue-300 "><Link to="/Cart">Cart</Link></h1>
                           </div>
                           <div className="flex flex-row justify-start m-3 pt-1 inline-block relative sm:hidden ">
                                    <SvgIcon  sx={{ color: blue[900], width: '30px', height: '30px' }} component={bikeIcon} />
                                   <div className="hover:text-blue-300">
                                   <select
                                    value={selectedValue}
                                    onChange={handleSelectChange}
                                    className="block  appearance-none w-full bg-slate-950 rounded shadow leading-tight focus:outline-none"
                                   >
                                          <option value="bikes"><h1>Bikes</h1></option>
                                             <option value="cars"><h1>Cars</h1></option>
                                             <option value="bicycles"><h1>Bicycles</h1></option>
                                  </select>
                          </div>
                  </div>

         </div>
    </div>
    
  );
};
