import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import About_us from "../components/About_us"
import Offers from "../components/Offers"
import Testimonials from "../components/Testimonials"
import Contact_us from "../components/contactUs"
import Footer from "../components/Footer"

export default function Home(){
  return (
    <div>
        <Navbar />
        <Hero />
        <Products />
        <About_us />
        <Offers />
        <Testimonials />
        <Contact_us />
        <Footer />
    </div>
  )
}
