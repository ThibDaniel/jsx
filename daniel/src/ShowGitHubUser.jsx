import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowGithubUser from './components/ShowGithubUser'; // Adjust the path accordingly

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users/:username" component={ShowGithubUser} />
      </Switch>
    </Router>
  );
}

export default App;