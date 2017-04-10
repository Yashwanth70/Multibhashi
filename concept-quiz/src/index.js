import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
// import PropTypes from 'prop-types';
import App from './App';
import Main from './main';
import './index.css';

//Basic Routing for Concept A & B
ReactDOM.render(
	<Router>
	  <div>
        <Route 	 exact path="/" component={App}/>
        <Route  path="/Concept B" component={Main}/>
       </div>
    </Router>,
  document.getElementById('root')
);
//Main JS File