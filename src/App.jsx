import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { Problem } from './components/Problem'
import { Pillars } from './components/Pillars'
import { Modules } from './components/Modules'
import { Pricing } from './components/Pricing'
import { Compliance } from './components/Compliance'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <Pillars />
        <Modules />
        <Pricing />
        <Compliance />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
