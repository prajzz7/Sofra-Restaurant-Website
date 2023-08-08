import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import './index.css'
import OrderButtons from '../components/OrderButtons'
import About from '../components/About'
import Contact from '../components/Contact'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className='page' id='pagetop'>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        
        <div className='homec' id='home'>
          
          <ImageSlider/>
          &nbsp;
          <div className='homeTextandBtn'>
            <OrderButtons/>
          </div>
        </div>
        <div className='aboutc' id='about'>
          &nbsp;
          <About/>
        </div>
        <div className='contactc' id='contact'>
          &nbsp;
          <Contact/>
        </div>
    </div>
  )
}

export default Home