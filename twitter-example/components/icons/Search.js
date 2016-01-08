'use strict';

var React = require('react-native');
var SearchPage = require('../../pages/SearchPage');
var ComposeIcon = require('./Compose');

var {
  StyleSheet,
  TouchableHighlight,
  Image
} = React;

var SearchBar = React.createClass({
  render() {
    return (
      <TextInput 
        style={styles.input} 
        placeholder="Search Twitter" 
        autoFocus="true"/>
    )
  }
});

var styles = StyleSheet.create({
  icon: {
    width: 21,
    height: 21,
    marginTop: 10,
    marginRight: 15
  }
});

var SearchIcon = React.createClass({

  goToSearch: function() {
    this.props.navigator.push({
      name: "Search",
      component: SearchPage,
      rightCorner: ComposeIcon,
      titleComponent: SearchBar
    });
  },

  render() {
    return (
      <TouchableHighlight 
        underlayColor="transparent" 
        onPress={this.goToSearch}>
        <Image source={require('image!search_icon')} style={styles.icon} />
      </TouchableHighlight>
    )
  }
});


module.exports = SearchIcon;
