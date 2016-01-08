'use strict';

var React = require('react-native');
var ComposePage = require('../../pages/ComposePage');

var {
  StyleSheet,
  TouchableHighlight,
  Image
} = React;


var styles = StyleSheet.create({
  icon: {
    width: 21,
    height: 21,
    marginTop: 10,
    marginRight: 15
  }
});

var ComposeIcon = React.createClass({
  goToCompose() {
    this.props.navigator.push({
      name: "Compose",
      component: ComposePage
    });
  },
  render() {
    return (
      <TouchableHighlight 
        underlayColor="transparent" 
        onPress={this.goToCompose}>
        <Image source={require('image!compose_icon')} style={styles.icon} />
      </TouchableHighlight>
    )
  }
});


module.exports = ComposeIcon;
