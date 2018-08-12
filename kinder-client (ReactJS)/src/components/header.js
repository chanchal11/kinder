import React, { Component } from 'react';

import axios from 'axios';

const Header = (props)=> {
    
    return (
        <nav>
      <ul>
        <li><a class="kinder-brand" ><b>Kinder</b></a></li>
        {
            props.LoginStatus ? <li><a href="/auth/logout"> <span className="glyphicon glyphicon-log-in"></span></a></li> : <li><a href="/auth/login"> <span className="glyphicon glyphicon-log-in"></span></a></li> 
        }
          
          <li><a  href="/"><span className="glyphicon glyphicon-home"></span></a></li>
          <li><a  href="" thisIsfor="/profile" > <span className="glyphicon glyphicon-user"></span> </a></li>
          
      </ul>
      </nav>
    )
}

export default Header;