import React from 'react'

type Props = {}

function Contacts({}: Props) {
  return (
    <div className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-4/5 justify-evenly mx-auto items-center z-0 '>
    <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-4xl'>Contacts</h3>
    <div className='flex flex-col space-y-10'>
      <h4 className='text-4xl font-semibold text-center'>I have what you are looking for{', '}
        <span className='italic text-yellow-900'>drop your message  down</span>
      </h4>
    </div>
    </div>

  )
}

export default Contacts