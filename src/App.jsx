import BottomBar from "./components/BottomBar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Job from "./components/Job"
import Navbar from "./components/Navbar"
import Solution from "./components/Solution"

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>

      <main className="relative">
        <Hero/>
        <Solution/>
        <Job/>

        <Footer/>
        <BottomBar/>
      </main>
    </div>
  )
}

export default App
