import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Home from './components/Home'


class App extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Joey"} initialAge={27} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("wrapper"))