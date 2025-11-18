import React from 'react'

const Dock = () => {
  return (
    <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-700 bg-opacity-10 rounded-2xl  px-4 py-3 w-auto flex gap-4'>
        
        <div className='w-10 h-10 bg-red-200 rounded-md'></div>
        <div className='w-10 h-10 bg-red-300 rounded-md'></div>
        <div className='w-10 h-10 bg-red-400 rounded-md'></div>
        <div className='w-10 h-10 bg-red-500 rounded-md'></div>
        <div className='w-10 h-10 bg-red-600 rounded-md'></div>
        <div className='w-10 h-10 bg-red-700 rounded-md'></div>
        <div className='w-10 h-10 bg-red-800 rounded-md'></div>
    </div>
  )
}

export default Dock