import BottomBar from "./components/BottomBar"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>

      <main className="relative">
        <BottomBar/>
      </main>
    </div>
  )
}

export default App
