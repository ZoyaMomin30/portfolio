import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import About from './components/about'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
