import React, { Component } from 'react';
import axios from 'axios';

const LoginView =()=> {
    return (
        <div className="main col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xs-offset-0 col-sm-offset-0 col-md-offset-4 col-lg-offset-4 toppad" >
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title"> Authentication </h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src="/static/2.png" className="img-circle img-responsive"/></div>
              <div className=" col-md-9 col-lg-9 ">
                
                <p>
                    Welcome to Kinder. Kinder is an app to share your Linkedin 
                    profile information with us, so that we can customize things for you.  
                </p>
                    <a href="/auth/login" className="btn btn-primary">Sign in with Linkedin</a>  
                  
              </div>
            </div>
          </div>

        </div>
      </div>
    )
}

export default LoginView;