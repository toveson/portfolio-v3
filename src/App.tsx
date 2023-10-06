import {useState} from "react"
import {NavBar} from "./components/NavBar"
import {About, Contact, Home, Projects, Resume} from "./views"

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home")

  return (
    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div style={{flex: 1, overflow: "auto"}}>
        {currentPage === "About" && <About />}
        {currentPage === "Contact" && <Contact />}
        {currentPage === "Home" && <Home />}
        {currentPage === "Projects" && <Projects />}
        {currentPage === "Resume" && <Resume />}
      </div>
    </div>
  )
}
