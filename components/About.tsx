import {motion } from 'framer-motion';
import Image from 'next/image'


type Props = {}

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.div 
      initial ={{
        x: -300,
        opacity: 0,

      }}

      transition={{
        duration: 1.5
      }}

      whileInView={{
        opacity:1,
        x:0
      }}
      className="mb-20 md:mb-0 "
      >
        <Image
        src='/professionalpicture.jpg'
        height={224}
        width={224}
        alt="my professional picture"
        className='flex-shrink-0 w-50 h-50  rounded-full object-cover md:rounded-lg md:w-65 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
      </motion.div>
    </div>
  )
}

export default About