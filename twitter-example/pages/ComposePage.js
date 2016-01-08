'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
});


var ComposePage = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>compose page</Text>
      </View>
    )
  }
});


module.exports = ComposePage;
