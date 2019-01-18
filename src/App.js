import React, { Component } from 'react';
import fire from './config/Fire';
import './App.css';
import Login from './Login';
import Home from './Home';



class App extends Component {
  constructor(){
    super();
    this.state=({
      user:{}
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }
  authListener() {
  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    if(user){
      this.setState({user});
      localStorage.setItem('user',user.id);
    }else{
      this.setState({user:null});
     localStorage.removeItem('user');
    }
  });
  }
  
  render() {
    return (
      
      <div className="App">  {this.state.user ? (<Home />) : (<Login/>)}
      </div>
    ); 
  }
}

export default App;
