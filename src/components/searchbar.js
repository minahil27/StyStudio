//import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import {FaSearch} from 'react-icons/fa'

export function SearchBar(){
//    const [searchItem,setSearchItem] = useState('');


    return (
        <div className="listing-text">
            <p>Find best salons in your area</p> 
            <div className='search-icon'>

             
        <IconContext.Provider  value = {{ color : 'white', size : '30px', }}>

        <button className='search-btn'>< FaSearch/></button>
        </IconContext.Provider>
        <input className='searchBar'
            type="text"
            placeholder="Search"
            //value={searchTerm}
           // onChange={handleSearchInputChange}
          />
          </div>
          </div>
      
      );
}


