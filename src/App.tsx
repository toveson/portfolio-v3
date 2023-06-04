import {useState} from "react"
import {NavBar} from "./components/NavBar"
import {About, Contact, Home, Projects, Resume} from "./views"

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home")

  return (
    <>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "About" && <About />}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Home" && <Home />}
      {currentPage === "Projects" && <Projects />}
      {currentPage === "Resume" && <Resume />}
    </>
  )
}
