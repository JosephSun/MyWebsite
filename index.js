import { browserHistory, IndexRoute, Route, Router} from 'react-router'
import About from './modules/About'
import App from './modules/App'
import Home from './modules/Home'
import React from 'react'
import Repo from './modules/Repo'
import Repos from './modules/Repos'
import { render } from 'react-dom'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
