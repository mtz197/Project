import React,{Component} from 'react';
import fire from './config/Fire';


//import { Link } from 'react-router-dom';
//import fire from './config/Fire';
//import { BrowserRouter, Route } from 'react-router-dom';
 
// using CommonJS modules
//const BrowserRouter = require('react-router-dom').BrowserRouter;
//const Route = require('react-router-dom').Route;
//const Link = require('react-router-dom').Link

class Login extends Component {
    
        contructor(props){
        //super();
        this.login=this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
       // this.signup = this.signup.bind(this);
        this.setState={
            email:'',
            password:''
           
        };
        
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.setState.email,this.setState.password).then((u)=>{

        }).catch((error)=>{
            console.log(error);
        });
    }
  

handleChange(e) {
   // this.setState({ name: e.target.value})
    
    

}
onChange = (state) => {
    this.setState(state);
  }
  
render() {
    
    return (
        
        
        <div className="col-md-6">
        <form>
            <div class="form-group">
            <label for="exampleInputEmail">Email</label>
            <input value={this.setState.email} onChange={this.handleChange} type="email" name="email"
            class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
            placeholder="Enter email" />
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input value={this.setState.password} onChange={this.handleChange}  type="password"
            name="password" class="form-control" id="exampleInputPassword" placeholder="Password" />
             </div>
             <button type="submit"  onClick={this.Login} class="btn btn-primary">Login</button>
        </form>
        </div>
    );
}
}
export default Login;