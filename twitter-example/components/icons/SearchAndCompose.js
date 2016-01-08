'use strict';

var React = require('react-native');

var SearchIcon = require('./Search');
var ComposeIcon = require('./Compose');

var {
  StyleSheet,
  View,
  TextInput
} = React;


var styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 21,
    height: 21,
    marginTop: 4,
    marginRight: 15
  },
  input: {
    backgroundColor: '#fff',
    width: 220,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: '#000',
    borderRadius: 4
  }
});


var SearchAndCompose = React.createClass({

  render() {
    return (
      <View style={styles.iconContainer}>
        <SearchIcon 
          navigator={this.props.navigator}
          route={this.props.route}/>
        <ComposeIcon
          navigator={this.props.navigator}
          route={this.props.route}/>
      </View>
    )
  }
}); 


module.exports = SearchAndCompose;
