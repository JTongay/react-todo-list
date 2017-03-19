import React, { PropTypes } from 'react'

export default class HomeComponent extends React.Component {
  constructor(props){
    super();
    this.state = {
      age: props.initialAge
    }
    this.onMakeOlder = this.onMakeOlder.bind(this);
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    })
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <p>In a new component!</p>
        <p>Your name is {this.props.name}, your age is {this.state.age}</p>
        <hr />
        <button onClick={this.onMakeOlder} className="btn btn-primary">Make me older</button>
      </div>
    )
  }
}

HomeComponent.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number
}
