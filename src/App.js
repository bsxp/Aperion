import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from './utils/history'
import DefaultPage from './components/paths/default'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div>
      <Router history={history}>
        <NavigationBar />
        <Route exact path="/" component={DefaultPage} />
      </Router>
    </div>
  );
}

export default App;
