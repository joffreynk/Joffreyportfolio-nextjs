import {Cursor, useTypewriter, Typewriter} from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {}

const Hero = (props: Props) => {  
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden text-center space-y-8">
      <BackgroundCircle />


      <h1>
        <Typewriter
            words={[
                "Hi, there! I'm Joffrey, software engineer",
                "I'm happy to see you here!!!!!!!"
            ]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
      </h1>
    </div>
  )
}

export default Hero