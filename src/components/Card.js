import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {
    const datas=useSelector((store)=>store?.data);
    console.log(datas);
  return (
    <div>
      <div className='flex flex-wrap '>
        {
        datas?.map((data)=>(
            <div key={data?.id} className='m-3 p-3 w-72 border rounded-md border-gray-400'>
                <h1 className='m-2 p-2'>{data?.title}</h1>
                <p >{data?.body}</p>
                <p>Userid:{data?.userId}</p>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Card
