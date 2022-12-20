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
      
    </article>
  )
}

export default ExperienceCard