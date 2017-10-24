import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
class AroundLi extends Component{
  render(){
    let pid = this.props.id;
    let purl = this.props.purl;
    let hurl = this.props.aurl;
    return (
      <li>
        <Link to={
                  {
                      pathname:"/One",
                      state:{pid,purl,hurl}
                  }
              }>
            <img src={this.props.img} />
            <p>{this.props.txt}</p>
        </Link>
      </li>
    )
  }
}
export default AroundLi;
