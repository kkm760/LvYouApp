import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {DATA} from '../php/php';
import HomepageLi from './HomepageLi';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
class Homepage extends Component{
    constructor(){
        super();
        this.state = {
            arr:DATA
        }
    }
    render(){
        window.scrollTo(0,0);
        let {arr} = this.state;
        let list = null;
        list = arr.periphery.map((e,i)=>{
            let data = {
                purl:'periphery',
                id:e.pid,
                num:i,
                img:e.img,
                key:i
            }
            return <HomepageLi {...data}/>
        });
        return (
            <div>
                <div className="search">
                    <input type="text" placeholder="搜索目的地国家/城市/关键字" />
                </div>
                <div className="swiper-container">
                <div className="swiper-wrapper">
                    <a href="javascript:;" className="swiper-slide">
                    <img src="https://pics.lvjs.com.cn/pics/super/2017/07/1500882456_53230.jpg" />
                    </a>
                    <a href="javascript" className="swiper-slide">
                    <img src="https://pics.lvjs.com.cn/pics/super/2017/08/1502260493_80335.jpg" />
                    </a>
                    <a href="javascript" className="swiper-slide">
                    <img src="https://pics.lvjs.com.cn/pics/super/2017/08/1502790420_74865.jpg" />
                    </a>
                    <a href="javascript" className="swiper-slide">
                    <img src="https://pics.lvjs.com.cn/pics/super/2017/08/1502863089_67676.jpg" />
                    </a>
                </div>
                    <div className="swiper-pagination"></div>
                </div>
                <ul className="hot">
                    <li>
                        <Link to="/Hotspots">
                            <img src={require('../images/3.png')} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Hotspots">
                            <img src={require('../images/4.png')} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Hotspots">
                            <img src={require('../images/5.png')} />
                        </Link>
                    </li>
                </ul>
                <ul className="nav">
                <li>
                    <Link to="/Around">
                    <img src={require('../images/6.png')} />
                    </Link>
                </li>
                <li>
                    <Link to="/Aroundg">
                    <img src={require('../images/7.png')} />
                    </Link>
                </li>
                <li>
                    <Link to="/Aroundc">
                    <img src={require('../images/8.png')} />
                    </Link>
                </li>
                <li className="nomargin">
                    <a href="javascript:;">
                    <img src={require('../images/9.png')} />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                    <img src={require('../images/10.png')} />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                    <img src={require('../images/11.png')} />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                    <img src={require('../images/12.png')} />
                    </a>
                </li>
                <li className="nomargin">
                    <a href="javascript:;">
                    <img src={require('../images/13.png')} />
                    </a>
                </li>
                </ul>
                <div className="introduce">
                <div className="intop">欢乐长假游</div>
                <ul className="intbod">
                   {list}
                </ul>
                </div>
                <ul className="butt">
                    <li>
                        <Link to="/Homepage">
                            <img src={require('../images/44.png')} />
                            <span className="active">首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={
                            {
                                pathname:"/Classification",
                                state:'hellow'
                            }
                        }>
                            <img src={require('../images/45.png')} />
                            <span>分类</span>
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
export default Homepage;