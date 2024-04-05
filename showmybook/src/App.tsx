import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {Header, Footer} from './components/HeaderFooter'
import MovieCard from './components/MovieCard'
import About from './components/About';
import Contact from './components/ContactUs';
import Booking from './components/SeatingLayout';
import Pricing from './components/Pricing';

function App() {

  return (
    <div className='relative h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MovieCard />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booking/:id' element={<Booking />}/>
          <Route path='/pricing/:id' element={<Pricing />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
