import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

const Search = () => {
    const searchtxt=useRef(null);
    const data=useSelector((store)=>store.data);
    const handleclick=()=>{
        console.log(searchtxt.current.value);
    
    }
  return (
    <div>
       <input type='text' placeholder='Enter a Title' ref={searchtxt} className='w-96 border border-gray-400 rounded-md m-4 p-4'/>
      <button className='w-36 m-4 p-4 rounded-md bg-slate-200' onClick={handleclick}>Search</button>
    </div>
  )
}

export default Search
