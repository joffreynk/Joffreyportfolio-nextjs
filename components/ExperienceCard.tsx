import {motion} from 'framer-motion';
import Image from 'next/image'


type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.div
      initial={{
        y:-100,
        opacity: 0
      }}

      transition = {{
        duration: 1.2
      }}

      whileInView={{
        opacity:1,
        y: 0,
      }}

      viewport = {{once: true}}
      >
        <Image
        src='/passport.jpg'
        width={128}
        height={128}
        alt='Experience picture'
        className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>FuLL stack</h4>
        <p className='font-bold text-2xl mt-1'>Microverse</p>
        <div className='flex space-x-2 my-2'>
          <Image
          src='/technologies/css3.png'
          className='h-10 w-10 rounded-full'
          alt='technology'
          width={40}
          height={40}
           />
           <Image
          src='/technologies/rails.png'
          className='h-10 w-10 rounded-full'
          alt='technology'
          width={40}
          height={40}
           />
           <Image
          src='/technologies/js.png'
          className='h-10 w-10 rounded-full'
          alt='technology'
          width={40}
          height={40}
           />
           <Image
          src='/technologies/html5.png'
          className='h-10 w-10 rounded-full'
          alt='technology'
          width={40}
          height={40}
           />
        </div>
        <p>April 18, 2022 - Now</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>mentor junior developer</li>
          <li>mentor junior developer</li>
          <li>mentor junior developer</li>
          <li>mentor junior developer</li>
          <li>mentor junior developer</li>
        </ul>

      </div>
      
    </article>
  )
}

export default ExperienceCard