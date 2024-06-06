import { useState } from 'react'
import './App.css'
import { HelloWorld } from './HelloWorld'
import { Message } from './Message'
import { Welcome } from './Welcome'
import { Clock } from './Clock'
import { Counter } from './CounterInc'
import { ClocEffect } from './ClocEffect'


function App() {
  const [count, setCount] = useState(0)
  const name = "Pluto"
 const age = 18

  return (
    <>  
      <HelloWorld />
      <Message></Message>
      <Welcome name={name} age={age} />
      <Clock></Clock>
      <Counter></Counter>
      <ClocEffect/>

    </>
  )
}

export default App
