import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Roles from './components/Roles'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-dvh bg-white font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Roles />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
