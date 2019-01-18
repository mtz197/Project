import React, { Component } from 'react';
import fire from './config/Fire';


class Home extends Component {
  constructor(props){
    return super(props);
    //this.logout=this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }
  
  
  render() {
    return (
      <div>
        <h1>Login Succesful</h1>
        <button onClick = {this.logout}>Logout</button>
      </div>
    ); 
  }
}

export default Home;
