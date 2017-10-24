//详情页面
import {BrowserRouter as Router,Route,Link,Redirect,withRouter,Switch  } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class HomepageLi extends Component{
  render(){
    return (
      <li>
        <Link to="/One">
            <img src={this.props.img} />
        </Link>
      </li>
    )
  }
}
export default HomepageLi;