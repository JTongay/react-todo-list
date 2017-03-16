import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

import Todos from './todos.jsx'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "Joey"
    }
  }

  componentDidMount(){
    this.refs.yo.showNewName();
  }

  showNewName() {
    // this.setState({
    //   name: "shit"
    // })
  }

  render () {
    return (
      <div>
        <h1>Booyah {this.state.name}</h1>
        <Todos name={this.state.name} myFunc={this.showNewName.bind(this)} ref="yo"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("wrapper"))
