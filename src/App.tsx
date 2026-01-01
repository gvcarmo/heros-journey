import { Contact } from "./pages/Contact"
import { Blog } from "./pages/Blog"
import { Destinations } from "./pages/Destinations"
import { Experiences } from "./pages/Experiences"
import { Header } from "./pages/Menus/Header"
import { Trips } from "./pages/Trips"
import { Gallery } from "./pages/Gallery"
import { Offers } from "./pages/Offers"

function App() {
  return (
    <section className="relative bg-neutral-very-dark-blue text-white min-h-screen flex flex-col items-center">
      <Header />
      <Destinations />
      <Offers />
      <Blog />
      <Trips />
      <Gallery />
      <Experiences />
      <Contact />
    </section>
  )
}

export default App
