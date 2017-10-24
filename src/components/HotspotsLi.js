import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
class HotspotsLi extends Component{
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
            
        </Link>
        <p>{this.props.txt}</p>
      </li>
    )
  }
}
export default HotspotsLi;