import BottomBar from "./components/BottomBar"
import Hero from "./components/Hero"
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

        {/* <BottomBar/> */}
      </main>
    </div>
  )
}

export default App
