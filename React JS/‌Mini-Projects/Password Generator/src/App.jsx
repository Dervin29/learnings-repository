import React from 'react'
import ColorChange from './components/ColorChange'
import Counter from './components/Counter'
import PasswordGenerator from './components/PasswordGenerator'
import './index.css'


function App() {

  return (
    <div className=' w-full h-screen flex flex-col justify-center items-center '>
      <PasswordGenerator/>
      {/* <Counter/> */}
      {/* <ColorChange/> */}
    </div>
  )
}

export default App
