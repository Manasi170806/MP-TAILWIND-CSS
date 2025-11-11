import React from 'react'
import HeroSection from './components/HeroSections.jsx'
import Newcollections from './components/Newcollections.jsx'
import Shop from './components/Shop.jsx'
import ShopByGender from './components/ShopByGender.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <HeroSection />
      <ShopByGender />
      <Newcollections />
      <Shop />
      <Footer />
     
    </div>
  )
}

export default App