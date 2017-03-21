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
    this.onChangeHomeMounted = this.onChangeHomeMounted.bind(this)
  }

  onGreet(){
    alert("Hallo");
  }

  onChangeLinkName(newName){
    this.setState({
      homeLink: newName,
      homeMounted: true
    })
  }

  onChangeHomeMounted(){
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  render () {
    let homeCmp = "";
    if(this.state.homeMounted){
      homeCmp = (
            <Home
              name={"Joey"}
              initialAge={27}
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
              initialLinkName={this.state.homeLink} 
            />
              )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {homeCmp}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button className="btn btn-primary" onClick={this.onChangeHomeMounted}>(Un)Mount Home Component</button>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("wrapper"))
