import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Perks from './components/Perks'
import Stats from './components/Stats'
import Highlights from './components/Highlights'
import StudentPartners from './components/StudentPartners'
import Mentors from './components/Mentors'
import Testimonials from './components/Testimonials'
import Resources from './components/Resources'
import FAQ from './components/FAQ'
import Careers from './components/Careers'
import Footer from './components/Footer'
import { perks, contributing } from './data/staticData'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Perks title="What are the perks?" items={perks} accent="accent" />
        <Perks title="How will you be contributing?" items={contributing} accent="indigo" />
        <Stats />
        <Highlights />
        <StudentPartners />
        <Mentors />
        <Testimonials />
        <Resources />
        <FAQ />
        <Careers />
      </main>
      <Footer />
    </>
  )
}
