/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

// var React = require('react-native');
import React from 'react-native';

// var App = require('./sf/');
// var App = require('./test/navigator.js');
var App = require('./twitter-example/');
// var App = require('./test/animate');
// var App = require('./example/TicTacToeApp');
// import App from './example/2048/Game2048.js';
// import App from './example/snake/';
// import App from './test/geo';
// import App from './example/shakeAround/';

var {
  AppRegistry,
} = React;

class TestProject extends React.Component {
  render() {
    return (
      <App />
    )
  }
}


AppRegistry.registerComponent('testProject', () => TestProject);
