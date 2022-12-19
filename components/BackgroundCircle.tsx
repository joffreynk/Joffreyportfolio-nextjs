import React from 'react'

type Props = {}

const BackgroundCircle = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333] rounded-full animate-ping w-[200px] h-[200px] mt-50' />
        <div className='absolute border border-[#333] rounded-full w-[300px] h-[300px] mt-50' />
        <div className='absolute border border-[#333] rounded-full w-[500px] h-[500px] mt-50' />
        <div className='absolute border border-[#f7ab0a] opacity-20 rounded-full  w-[650px] h-[650px] mt-50 animate-pulse' />
        <div className='absolute border border-[#333] rounded-full  w-[800px] h-[800px] mt-50' />
    </div>
  )
}

export default BackgroundCircle