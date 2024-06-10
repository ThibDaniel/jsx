import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
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
import { TodoList } from './ToDoList'
import { ShowGitHubUser } from './ShowGitHubUser'


function App() {
  const name = "Daniel"
  const age = 18
  const [language, setLanguage] = useState('it')

  return (

    <BrowserRouter>
      <Container title={<h1>My Title</h1>}>
        <div>
          <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">Users</Link>
        </div>
        <div className='welcome'>
          <HelloWorld />
          <Message></Message>
          <Routes>
            <Route path='/' element={<Welcome name='Daniel'/>} />
          </Routes>
          <div>
            <select name="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">EN</option>
              <option value="it">IT</option>
            </select>
            <LanguageContext.Provider value={language}>
              <Clock></Clock>
            </LanguageContext.Provider >
          </div>
          <Routes>
            <Route path='/counter' element={<Counter/>} />
          </Routes>
          <ClocEffect />
          <MouseClicker />
          <InteractiveWelcome />
          <Login></Login>
        </div>
        <LoginForm />
        <Routes>  
          <Route path='/users' element={<GitHubUser/>}/>
          <Route path="/users/:name" element={<ShowGitHubUser/>} />
        </Routes>
       
        <GithubUsers />
        <TodoList />
      </Container>
    </BrowserRouter>

  )
}

export default App
