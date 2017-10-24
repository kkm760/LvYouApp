import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DATA} from '../php/php';
import AroundLi from './AroundLi';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
class Aroundc extends Component{
    constructor(){
        super();
        this.state = {
            arr:DATA
        }
    }
    render(){
        let {arr} = this.state;
        let list = null;
        list = arr.exit.map((e,i)=>{
            let data = {
                aurl:'/Aroundc',
                purl:'exit',
                id:e.pid,
                txt:e.txt,
                img:e.img,
                key:i
            }
            return <AroundLi {...data}/>
        });
        return (
            <div>
                <div className="search">
                    <Link to="/Homepage">＜</Link>
                    <input type="text" placeholder="搜索目的地国家/城市/关键字" className="input1"/>
                </div>
                <ul className="round_6">
                    <li><Link to="/Around" className="zgc">周边游</Link></li>
                    <li><Link to="/Aroundg" className="zgc">国内游</Link></li>
                    <li className="active">出境游</li>
                </ul>
                <ul className="Rendering_6">
                    {list}
                </ul>
            </div>
        )
    }
}
export default Aroundc;