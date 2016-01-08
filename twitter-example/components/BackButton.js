'use strict';

var React = require('react-native');

var {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} = React;


var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  backButton: {
    width: 10,
    height: 17,
    marginRight: 3
  },
  navBarLeftButton: {
    alignItems: 'center',
    padding: 10,
  },
});


var BackButton = React.createClass({
  _goBack() {
    this.props.navigator.pop();
  },
  _goHome() {
    this.props.navigator.popToTop();
  },
  _backAction() {
    // ['Search','Compose','addPeople'].some((value)=>{})
  },
  render() {
    return (
      <TouchableOpacity
          onPress={() => this.props.navigator.pop()}
          style={styles.navBarLeftButton}>
        <View style={styles.container}>
          <Image source={require('image!back_button')} style={styles.backButton} />
        </View>
      </TouchableOpacity>
    )
  }
}); 


module.exports = BackButton;
