import React from 'react';
import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

const ShowGithubUser = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>GitHub User: {username}</h1>
      <GithubUser username={username} />
    </div>
  );
};

export default ShowGithubUser;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GithubUsers from './GithubUsers';
import ShowGithubUser from './ShowGithubUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Users</h1>
        <Router>
          <Routes>
            <Route path="/" element={<GithubUsers />} />
            <Route path="/users/:username" element={<ShowGithubUser />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;