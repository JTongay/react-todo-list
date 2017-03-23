import React from "react";
import { browserHistory } from 'react-router';

export default class User extends React.Component {

    onNavigateHome(){
        browserHistory.push("home")
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User Id: {this.props.params.id}</p>
                <div>Booyah</div>
                <button className="btn btn-primary" onClick={this.onNavigateHome}>Go Home</button>
            </div>
        );
    }
}