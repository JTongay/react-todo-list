import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import Home from './components/Home';
import Root from './components/Root';
import User from './components/User';

class App extends React.Component {
  render(){
    return (
    <Router history={browserHistory}>
      <Route path={"/"} component={Root}>
        <IndexRoute component={Home} />
        <Route path={"user/:id"} component={User}></Route>
        <Route path={"home"} component={Home}></Route>
      </Route>
    </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("wrapper"))
