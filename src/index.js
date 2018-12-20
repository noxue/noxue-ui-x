import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from './views/Home';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import './common.scss'
import Article from './views/Article';
import NoMatch from './views/404'

const history = createBrowserHistory()

ReactDOM.render((
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/a/:id" component={Article} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
