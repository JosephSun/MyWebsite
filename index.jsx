import { browserHistory, IndexRoute, Route, Router} from 'react-router'
import About from './components/About'
import App from './components/App'
import Home from './components/Home'
import React from 'react'
import Repo from './components/Repo'
import Repos from './components/Repos'
import Resume from './components/Resume'
import { render } from 'react-dom'
render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/resume" component={Resume}/>
    </Route>
  </Router>
, document.getElementById('app'))
