import React from 'react'
import AppRouter from './routes/AppRouter'
import { NavbarHome } from './components/NavbarHome'

function App() {
  return (
    <div>
      <NavbarHome/>
      <div className='mt-8'>
      <AppRouter/>
      </div>
    </div>
  )
}

export default App