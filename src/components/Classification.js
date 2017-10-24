import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DATA} from '../php/php';
import ClassificationLi from './ClassificationLi';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
class Classification extends Component{
    componentWillMount(){
        console.log('出现前')
    }
    componentDidMount(){
        console.log('出现后')
    }
    constructor(){
        super();
        this.state = {
            arr:DATA
        }
    }
    //this.props.location.state  接收to传的参数
    render(){
        window.scrollTo(0,0);
        let {arr} = this.state;
        let list = null;
        list = arr.domestic.map((e,i)=>{
            let data = {
                purl:'domestic',
                id:e.pid,
                num:i,
                img:e.img,
                key:i
            }
            return <ClassificationLi {...data}/>
        });
        return (
            <div>
                <div className="search">
                    <input type="text" placeholder="搜索目的地国家/城市/关键字" />
                </div>
                <ul className="nav_2">
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/20.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/21.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/22.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/23.png')} />
                        </a>
                    </li>
                    <li className="nav_2noma">
                        <a href="javascript:;">
                            <img src={require('../images/24.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/25.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/26.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/27.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/28.png')} />
                        </a>
                    </li>
                    <li className="nav_2noma">
                        <a href="javascript:;">
                            <img src={require('../images/29.png')} />
                        </a>
                    </li>
                </ul>
                <div className="season_2">
                    <p>当季游</p>
                    <ul>
                        <li>
                            <a href="javascript:;">
                                <img src={require('../images/30.png')} />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src={require('../images/31.png')} />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src={require('../images/32.png')} />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src={require('../images/33.png')} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="everyday">
                    <p>每日推荐</p>
                    <ul>
                        {list}
                    </ul>
                </div>
                <ul className="butt">
                    <li>
                        <Link to="/Homepage">
                            <img src={require('../images/44.png')} />
                            <span>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Classification">
                            <img src={require('../images/45.png')} />
                            <span className="active">分类</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Panicbuying">
                            <img src={require('../images/46.png')} />
                            <span>抢购</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Mine">
                            <img src={require('../images/47.png')} />
                            <span>我的</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Classification;