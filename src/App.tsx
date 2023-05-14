import About from "./views/About"
import Contact from "./views/Contact"
import Home from "./views/Home"
import Projects from "./views/Projects"

export default function App() {
  return (
    // TODO: this will have view called and routing
    // ? Get a navbar build first
    <>
      <h1>Hello from app.tsx</h1>
      {/* Nav bar will go here. */}
      {/* Will need useState to manage routing. */}
      {/* Use short circuit to show views */}
      <About />
      <Contact />
      <Home />
      <Projects />
    </>
  )
}
