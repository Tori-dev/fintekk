import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Features from './components/Features'
import Featuretwo from './components/Featuretwo'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Features />
      <Featuretwo />
      <Footer />
    </div>
  )
}

export default App
