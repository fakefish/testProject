'use strict';

var React = require('react-native');

var Router = require('./router.js');

var HomePage = require('./pages/HomePage');
var BackButton = require('./components/BackButton');
var SearchAndCompose = require('./components/icons/SearchAndCompose');
var AddPeople = require('./components/icons/AddPeople');
var TitleComponent = require('./components/Title');
var pageRouter = require('./pages/pageRouter');

var {
  StyleSheet,
  View,
  StatusBarIOS,
} = React;

var {
  home
} = pageRouter;

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  }
});


var TwitterApp = React.createClass({
  render() {
    // StatusBarIOS.setHidden(true, 'fade');
    return (
      <Router 
        firstRoute={home} 
        headerStyle={styles.header}
        backButtonComponent={BackButton}
        titleComponent={TitleComponent}
      />
    )
  }
});


module.exports = TwitterApp;
