import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
    
} from 'react-router-dom';
import {DATA} from '../php/php';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class One extends Component{
    constructor(){
        super();
        this.state = {
            arr:DATA
        }
    }
    render(){
        let p = this.props.location.state;
        let com = p.purl;
        let hom = p.hurl;
        let {arr} = this.state;
        let lists = null;
        arr[com].forEach((e,i)=>{
            if(e.pid === p.pid){
                lists = e;
            }
        })
        return (
            <div>
                <Link to={hom} className="alone">＜</Link>
                    <a href="javascript:;">
                        <img src={lists.pimg} className="aloneImg" />
                        <span className="aloneSpan">ID:{lists.pid}</span>
                    </a>
                    <div className="divcolor">
                        <p className="pintroduce">{lists.ptext}</p>
                        <p className="discount">优惠导游  品特色新  私享专属行程</p>
                        <div className="many">
                            <span className="manys1">￥</span>
                            <span className="manys2">{lists.price}</span>
                            <span className="manys3">价格说明</span>
                            <span className="manys4">{lists.pnum}人已付款</span>
                        </div>
                        <p className="mortgage">抵押劵20%
                            <span>（下单时可至多可抵扣订单全额的20%）
                            </span>
                        </p>
                        <p className="fast">快速响应&nbsp;&nbsp;&nbsp;&nbsp;全时中文</p>
                        <p className="package">选择：套餐类型/日期/出游人群&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></p>
                        <p className="authentication">晨光旅游
                        <span className="authentication1">认证商家</span> 
                        <span className="authentication2">进入店铺</span>
                        </p>  
                        <ul className="product">
                            <li>产品介绍</li>
                            <li>费用说明</li>
                            <li>用户点评</li>
                        </ul> 
                    </div>
                <Link to={
                    {
                        pathname:"/Signin",
                        state:'/One'
                    }
                } className="buynow">立即购买</Link>
            </div>
        )
    }
}
export default One;