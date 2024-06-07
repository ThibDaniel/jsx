import { useState } from 'react'
import './App.css'
import { HelloWorld } from './HelloWorld'
import { Message } from './Message'
import { Welcome } from './Welcome'
import { Clock } from './Clock'
import { Counter } from './CounterInc'
import { ClocEffect } from './ClocEffect'
import { MouseClicker } from './MouseClicker'
import { InteractiveWelcome } from './InteractiveWelcome'
import { Login } from './Login'


function App() {
  const [count, setCount] = useState(0)
  const name = "Daniel"
  const age = 18

  return (
    <div className='welcome'>
      <HelloWorld />
      <Message></Message>
      <Welcome name={name} age={age} />
      <Clock></Clock>
      <Counter/>
      <ClocEffect />
      <MouseClicker />
      <InteractiveWelcome/>
      <Login></Login>
    </div>
  )
}

export default App
