import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header';
import Home from './components/Home';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      homeLink: "Home"
    }
  }

  onGreet(){
    alert("Hallo");
  }

  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home
              name={"Joey"}
              initialAge={27}
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
              initialLinkName={this.state.homeLink} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("wrapper"))
