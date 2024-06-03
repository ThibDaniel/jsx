import { useState } from 'react'
import './App.css'
import { HelloWorld } from './HelloWorld'
import { Welcome } from './Welcome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <HelloWorld/>
      <HelloWorld/>
      <Welcome name={<strong>World</strong>} age= "18"/>
    </>
  )
}

export default App
