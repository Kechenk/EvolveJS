import React from 'react'
import Welcome from './components/Welcome'
import { PageIndicator } from './components/ui/PageIndicator'
import Menu from './components/Menu'
import About from './components/About'
import Sponsor from './components/Sponsor'

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-tl from-indigo-900 to-slate-900">
      {[...Array(312)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-60"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 2 + 1}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 1}s`,
          }}
        />
      ))}
      <Welcome />
      <About />
      <Menu />
      <Sponsor />
      <PageIndicator />
      </div>
  )
}

export default App