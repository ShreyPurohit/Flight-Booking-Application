import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header, Footer } from './components/HeaderFooter'
import About from './components/About';
import Contact from './components/ContactUs';
import Booking from './components/SeatingLayout';
import Pricing from './components/Pricing';
import CarOusel from './components/Carousel';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<CarOusel />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking/:id' element={<Booking />} />
        <Route path='/pricing/:id/platinum/:p/gold/:g/silver/:s' element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
