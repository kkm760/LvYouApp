import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class ClassificationLi extends Component{
  render(){
    let pid = this.props.id;
    let purl = this.props.purl;
    let hurl = '/Classification';
    return (
      <li>
        <Link to={
              {
                  pathname:"/One",
                  state:{pid,purl,hurl}
              }
        }>
            <img src={this.props.img} />
        </Link>
      </li>
    )
  }
}
export default ClassificationLi;