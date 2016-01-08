'use strict';

var React = require('react-native');

var Tabbar = require('../components/Bottom');
// var pageRouter = require('./pageRouter.js');

var {
  StyleSheet,
  ScrollView
} = React;


var HomePage = React.createClass({

  render() {

    return (
      <Tabbar
        route={this.props.route}
        navigator={this.props.navigator}>
        
      </Tabbar>
    )
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f8fa'
  }
});


module.exports = HomePage;
