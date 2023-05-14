import {useState} from "react"
import {NavBar} from "./components/NavBar"
import About from "./views/About"
import Contact from "./views/Contact"
import Home from "./views/Home"
import Projects from "./views/Projects"

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home")

  return (
    // TODO: this will have view called and routing
    // ? Set up useContext here?
    <>
      <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {currentPage === "About" && <About />}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Home" && <Home />}
      {currentPage === "Projects" && <Projects />}
    </>
  )
}
