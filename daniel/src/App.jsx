import { useState } from 'react'
import './App.css'
import { HelloWorld } from './HelloWorld'
import{Message} from './Message'
import { Welcome } from './Welcome'
import { Clock } from './Clock'
import { Counter } from './CounterInc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <HelloWorld/>
      <HelloWorld/>
      <Message></Message>
      <Welcome name={<strong>World</strong>} age= "18"/>
      <Clock></Clock>
      <Counter></Counter>
     
      
    </>
  )
}

export default App
