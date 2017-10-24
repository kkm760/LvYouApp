import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
class Mine extends Component{
    componentWillMount(){
        console.log('出现前')
    }
    componentDidMount(){
        console.log('出现后')
    }
    render(){
        window.scrollTo(0,0);
        return (
            <div>
                <div className="login_3">
                    <img src={require('../images/35.png')} />
                    <div className="loginx_3">
                        <Link to="/Signin" className="a1_3">登录</Link>
                        <span>/</span>
                        <Link to="/Register" className="a2_3">注册</Link>
                    </div>
                </div>
                <ul className="order_3">
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/37.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/38.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/39.png')} />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/40.png')} />
                        </a>
                    </li>
                </ul>
                <ul className="setup_3">
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/41.png')} />
                            <p>设置</p>
                            <span>></span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/42.png')} />
                            <p>社区</p>
                            <span>></span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src={require('../images/43.png')} />
                            <p>服务中心</p>
                            <span>></span>
                        </a>
                    </li>
                </ul>
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
                            <span className="active">我的</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Mine;