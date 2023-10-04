import React from 'react'

const ViedoTile = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden  md:inline-block py-6 text-lg w-1/4'> {overview} </p> 
        <div className=' my-4 md:m-0'>
            <button className="bg-white text-black md:py-4 px-12 text-xl py-1 px-3 md:px-4  rounded-lg hover:bg-opacity-80">  ▶️ Play</button>
            <button className='mx-2 bg-gray-500 px-12 text-white p-4 text-xl bg-opacity-50 rounded-lg hidden  md:inline-block'>More Info</button>
        </div>


    </div>
  )
}

export default ViedoTile