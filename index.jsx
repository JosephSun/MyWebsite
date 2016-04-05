import { browserHistory, IndexRoute, Route, Router} from 'react-router'
import About from './components/About'
import App from './components/App'
import Blogs from './components/Blogs'
import Home from './components/Home'
import React from 'react'
import Repo from './components/Repo'
import Repos from './components/Repos'
import { render } from 'react-dom'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/blogs" component={Blogs}/>
    </Route>
  </Router>
, document.getElementById('app'))
