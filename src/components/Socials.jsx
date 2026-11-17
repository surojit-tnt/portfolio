import { portfolio,socialLinks } from '../data/portfolioData'
import Socialicons from './socialicons'
import linkedin from '../assets/linkedin.png'

const Socials = () => {
  return (
    <section className="flex mb-12 h-12 w-full  " id="socials">
        <div className=" flex justify-center gap-2 h-full w-full ">
            <Socialicons url={linkedin} name="Linkedin"/>
            <Socialicons/>
          
           {/*  <a href={portfolio.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a> */}
            {/* <a href={portfolio.socials.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
            </a> */}
            
        </div>
    </section>
  )
}

export default Socials
