import React, { Component } from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link,Redirect,withRouter,Switch} from 'react-router-dom';

// 登录页
class Signin extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }
    changename=(ev)=>{
        this.setState({
            name:ev.target.value
        })
    }
    changepass=(ev)=>{
        this.setState({
            password:ev.target.value
        })    
    }
    backoff=()=>{
        $('#signup_file').css({
            "display":"none"
        })
        $('#self').css({
            "height":"26.47466667rem"
        })
        $('#footer').css({
            "display":"block"
        })
    }
    render() {
        return (
            <div>
            <div id="signup_file">
                <Link to="Mine" id="signup_tittle">
                    <img
                    style={{zIndex:3}} 
                    src={require('../images/decrecommend5.png')} 
                    alt=""
                    onClick={this.backoff}
                    />
                    <p>登陆</p>
                </Link>
                <div id="signup_input">
                    <input type="text" 
                    name="" 
                    value={this.name} 
                    placeholder="输入你的手机号/邮箱/昵称"
                    onChange={this.changename}
                    />
                    <input type="password" 
                    name="" 
                    value={this.password}
                    placeholder="输入密码"
                    onChange={this.changepass}
                    />
                </div>
                <div id="signup_btn">
                    <div id="sign_up">登陆</div>
                    <span id="for_pass">忘记密码？</span>
                </div>
                <div id="signup_signin">
                    <span>还没账号？</span>
                    <Link to="/Register" id="signup_in">立即注册</Link>
                </div>
                <div id="signup_other">
                    <p>使用其他账号登陆</p>
                    <ul className="clearFix">
                        <li>
                            <img src={require('../images/wx.png')} alt=""/>
                            <span>微信</span>
                        </li>
                        <li>
                            <img src={require('../images/wb.png')} alt=""/>
                            <span>微博</span>
                        </li>
                        <li>
                            <img src={require('../images/qq.png')} alt=""/>
                            <span>QQ</span>
                        </li>
                        <li>
                            <img src={require('../images/db.png')} alt=""/>
                            <span>豆瓣</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        );
    }
}
export default Signin;