import {Cursor, useTypewriter, Typewriter} from "react-simple-typewriter";

type Props = {}

const Hero = (props: Props) => {
    console.log('hello');
    
  return (
    <div>
        <Typewriter
            words={[
                "Hi, there!",
                "My name is Joffrey",
                "I'm software engineer"
            ]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
    </div>
  )
}

export default Hero