import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adddata } from '../utils/dataslice';
import Card from './Card';
import Filter from './Filter';
import Search from './Search';

const Body = () => {
    const data=useSelector((store)=>store.data);
    const dispatch=useDispatch();
    const fetchdata=async()=>{
        const url=await fetch("https://jsonplaceholder.typicode.com/posts");
        const json=await url.json();
        console.log(json);
        dispatch(adddata(json));
    };
    useEffect(()=>{
        fetchdata();
    },[]);
  return (
    <div>
    <div className='flex '>
       <Search/>
      <h1 className='m-4 p-4 text-xl'>Total Data:{data?.length}</h1>
    </div>
      
      <div className='flex justify-around'>
        <div className='w-32'><Filter /></div>
        <Card/>
      </div>
      
    </div>
  )
}

export default Body;
