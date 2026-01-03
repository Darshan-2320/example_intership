import React from 'react'
import { useSelector } from 'react-redux'

const Filter = () => {
    const datas=useSelector((store)=>store?.data);
  return (
    <div className=''>
      <div>
        {
            datas?.map((data)=>(
                <div key={data?.id}>
                    <h1>Userid:{data?.userId}</h1>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Filter
