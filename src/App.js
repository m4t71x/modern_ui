import { Header, Footer, Blog, WhatGPT3, Possibility, Features } from './containers'
import { CTA, Navbar, Brand } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App