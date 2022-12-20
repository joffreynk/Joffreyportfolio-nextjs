import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-4xl'>projects</h3>

      <div>
        <div></div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7ab8a]/10 ltf-0 h-[400px] -skew-y-12' />
    </div>
  )
}

export default Projects