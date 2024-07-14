import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GithubUsers from './GithubUsers';
import ShowGithubUser from './ShowGithubUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Users</h1>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/users/octocat">User: Octocat</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<GithubUsers />} />
            <Route path="/users" element={<GithubUsers />} />
            <Route path="/users/:username" element={<ShowGithubUser />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;