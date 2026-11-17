import { Links } from '../data/portfolioData'
import Socialicons from './socialicons'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import leet from '../assets/leetCodee.png'




const Socials = () => {

  return (
    <section className="flex mb-12 h-12 w-full  " id="socials">
        <div className="  flex justify-center gap-2 h-full w-full ">
            <Socialicons url={Links.linkedin}  pic={linkedin} name="Linkedin"/>
            <Socialicons url={Links.github } name="Github"  pic={github} />
            <Socialicons url={Links.github } name="Github"  pic={leet} />
        
        </div>
    </section>
  )
}

export default Socials
