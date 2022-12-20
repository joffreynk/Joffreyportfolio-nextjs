import {motion } from 'framer-motion';
import Image from 'next/image';


type Props = {}

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center">

      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
    
    <div className='mt-24 flex text-justify flex-col relative md:flex-row max-w-7xl justify-evenly mx-auto items-center' >
      
      <motion.img

      initial ={{
        x: -150,
        opacity: 0,
      }}

      transition = {{
        duration: 1.5,
      }}

      whileInView={{
        opacity:1,
        x:0
      }}

      src={"/passport.jpg"}

        alt="my professional picture"

        className='md:mb-0 xl:mt-60 w-56 h-56 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-1/2 md:h-4/5 xl:w-1/2  xl:h-1/2'
      />

      <motion.div
      initial ={{
        x: 150,
        opacity: 0,
      }}

      transition = {{
        duration: 1.5,
      }}

      whileInView={{
        opacity:1,
        x:0
      }}
      
      className="space-y-10 px-0 md:px-10">
        <h5 className='text-2xl mt-3 font-semibold text-center'>
          Here is a little about me
        </h5>
        <p className='mt-0 pt-0'>
        Hello I&#39;m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don&#36t hestiate to contact me
        <br />
        Hello I&#39;m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don&#36t hestiate to contact me
        <br />

        </p>
      </motion.div>
      </div>

    </div>
  )
}

export default About