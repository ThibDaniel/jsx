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
import { Container } from './Container'
import { LanguageContext } from './LanguageContext'
import { GitHubUser } from './GitHubUser'
import { GithubUsers } from './GithubUsers'
import { LoginForm } from './LoginForm'


function App() {
  const name = "Daniel"
  const age = 18
 const [language, setLanguage] = useState('it')

  return (
   
      
    <Container title={<h1>My Title</h1>}>
    <div className='welcome'>
      <HelloWorld />
      <Message></Message>
      <Welcome name={name} age={age} />
    <div>
      <LanguageContext.Provider value={language}>
        <select name="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="it">IT</option>
        </select>
      <Clock></Clock>
      </LanguageContext.Provider >
      </div>
      <Counter/>
      <ClocEffect />
      <MouseClicker />
      <InteractiveWelcome/>
      <Login></Login>
    </div>
    <LoginForm/>
    <GitHubUser/>
    <GithubUsers/>
    </Container>
    
  )
}

export default App
