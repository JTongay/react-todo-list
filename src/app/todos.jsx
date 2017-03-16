import React, { PropTypes } from 'react'

export default class TodosComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name
    }
  }

  showNewName() {
    this.setState({
      name: "yoyoyo"
    })
  }

  render () {
    console.log(this.refs);
    return (
      <div>
        <h2>Shit son</h2>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
