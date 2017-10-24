import React, { Component } from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link,Redirect,withRouter,Switch} from 'react-router-dom';
// 注册页
class Register extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            yanzheng:'',
            password:'',
            onoff:false
        }
    }
    // 返回
    backoff=()=>{
        $('#signin_file').css({
            "display":"none"
        })
        $('#self').css({
            "height":"26.47466667rem"
        })
        $('#footer').css({
            "display":"block"
        })
    }
    // 手机号码验证
    changename=(ev)=>{
        this.setState({
            name:ev.target.value
        })
        var val=ev.target.value;
        if(/^1[34578]\d{9}$/.test(val)){
            this.setState({
                onoff:true
            })
            $('.yzspan').css({
                "background":"skyblue"
            })
        }else{
            this.setState({
                onoff:false
            })
            $('.yzspan').css({
                "background":"#ccc"
            })
        }
    }
    changepass=(ev)=>{
        this.setState({
            password:ev.target.value
        })    
    }
    changeyanzheng=(ev)=>{
        this.setState({
            yanzheng:ev.target.value
        })    
    }
    // 注册页登陆按钮
    signupclick=()=>{
        $('#signin_file').css({
            "height":"0"
        })
        $('#signup_file').css({
            "display":"block",
            "height":"26.47466667rem"
        })
    }
    // 功能未实现弹窗
    alertsome=()=>{
        alert('部分功能尚未实现')
    }
    alertsome2=()=>{
        if(this.state.onoff){
            alert('买不起接口')
        }else{
            alert('请输入正确的电话号码')
        }
    }
    render() {
        return (
            <div id="signin_file">
            <Link to="/Mine" id="signin_tittle">
                <img 
                style={{zIndex:3}} 
                src={require('../images/decrecommend5.png')} 
                alt=""
                onClick={this.backoff}
                />
                <p>注册</p>
            </Link>
            <div id="signin_input">
                <input 
                type="text" 
                name="" 
                value={this.name} 
                placeholder="输入你的手机号"
                onChange={this.changename}
                />
                <input 
                type="text" 
                name="" 
                value={this.state.yanzheng}
                placeholder="输入验证码"
                onChange={this.changeyanzheng}
                />
                <span 
                className="yzspan"
                onClick={this.alertsome2}
                >获取验证码</span>
                <input 
                type="password" 
                name="" 
                value={this.state.password} 
                placeholder="请输入6位以上的数字或字母作密码"
                onChange={this.changepass}
                />
                <p>注册即表示同意《用户使用条款及服务协议》</p>
            </div>
            <div id="signin_btn">
                <Link 
                id="signin_down"
                onClick={this.alertsome}
                to="/Homepage"
                >下一步</Link>
            </div>
            <div id="signin_signin">
                <span>已有账号？</span>
                <span
                id="signin_up"
                onClick={this.signupclick}
                >立即登陆</span>
            </div>
        </div>
        );
    }
}
export default Register;