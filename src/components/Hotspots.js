import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DATA} from '../php/php';
import HotspotsLi from './HotspotsLi';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
class Hotspots extends Component{
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
                aurl:'/Hotspots',
                purl:'exit',
                id:e.pid,
                txt:e.txt,
                img:e.img,
                key:i
            }
            return <HotspotsLi {...data}/>
        });
        return (
            <div>
                <div className="search">
                    <Link to="/Homepage">＜</Link>
                    <input type="text" placeholder="搜索目的地国家/城市/关键字" className="input1"/>
                </div>
                <div className="radiu_4">热门景点</div>
                <ul className="hot_4">
                    {list}
                </ul>
            </div>
        )
    }
}
export default Hotspots;