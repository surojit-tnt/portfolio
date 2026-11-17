import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'
import Socials from './components/Socials'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Socials />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
