import React,{Component} from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link,Redirect,withRouter,Switch} from 'react-router-dom';
//import {BrowserRouter as Router,Route,Link,} from 'react-router-dom';
import './css/index.css';
import Homepage from './components/Homepage.js';
import Panicbuying from './components/Panicbuying.js';
import Classification from './components/Classification.js';
import ClassificationLi from './components/ClassificationLi.js';
import Mine from './components/Mine.js';
import Hotspots from './components/Hotspots.js';
import HotspotsLi from './components/HotspotsLi.js';
import Around from './components/Around.js';
import Aroundg from './components/Aroundg.js';
import Aroundc from './components/Aroundc.js';
import One from './components/One.js';
import Signin from './components/Signin.js';
import Register from './components/Register.js';



ReactDOM.render((
  <Router >
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/Homepage" component={Homepage}/>
        <Route path="/Panicbuying" component={Panicbuying}></Route>
        <Route path="/Classification" component={Classification}></Route>
        <Route path="/ClassificationLi" component={ClassificationLi}></Route>
        <Route path="/Mine" component={Mine}></Route>
        <Route path="/Hotspots" component={Hotspots}></Route>
        <Route path="/HotspotsLi" component={HotspotsLi}></Route>
        <Route path="/Around" component={Around}></Route>
        <Route path="/Aroundg" component={Aroundg}></Route>
        <Route path="/Aroundc" component={Aroundc}></Route>
        <Route path="/One" component={One}></Route>
        <Route path="/Signin" component={Signin}></Route>
        <Route path="/Register" component={Register}></Route>
      </Switch>
    </div>
  </Router>
), document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
