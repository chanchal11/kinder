import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from "./components/header";
import ProfileView from "./components/profile";
import LoginView from "./components/login";
class App extends Component {

  /*constructor(){
    
  }*/

  componentDidMount(){
    //this.fetchInfo();
    axios.get(`/profile`,{baseURL: this.baseURL ,withCredentials: true}).then((res) => {
      console.log("From ComponentMount- ");
      console.log(res.data);
      //if(res.data.status)
      //{
        this.setState({LoginStatus : true, profile: res.data})
      /*}
      else{
        this.setState({LoginStatus : false})
      }*/
    })
  }

  state = {
    profile:{},LoginStatus:false
  }
   baseURL= `http://kinderji.herokuapp.com`;     //`http://localhost:3000`;

  /* loginCheck(){
    axios.get(`/logincheck`,{baseURL: this.baseURL ,withCredentials: true}).then((res) => {
      this.setState({LoginStatus : res.data.status})
    })
  } */

  fetchInfo(){
    axios.get(`/profile`,{baseURL: this.baseURL ,withCredentials: true}).then((res) => {
      if(res.data.status)
      {
        this.setState({LoginStatus : true, profile: res.data})
      }
      else{
        this.setState({LoginStatus : false})
      }
    })
  }

  /*
  getUser = (e) => {
    e.preventDefault();
    this.loginCheck();
  }*/

  render() {
    return (
      <React.Fragment>
      <Header LoginStatus={this.state.LoginStatus} />
      {
        this.state.LoginStatus ? <ProfileView data={this.state.profile} LoginStatus={this.state.LoginStatus} /> : <LoginView/>
      }
      </React.Fragment>
    );
  }
}

export default App;
