'use strict';

var React = require('react-native');
// var pageRouter = require('../../pages/pageRouter');

var {
  StyleSheet,
  TouchableHighlight,
  Image
} = React;


var styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 18,
    marginTop: 10,
    marginLeft: 8
  }
});

var AddPeopleIcon = React.createClass({

  goToAddPage: function() {
    this.props.navigator.push(
      require('../../pages/pageRouter').findPeople
    );
  },

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToAddPage}>
        <Image source={require('image!add_people_icon')} style={styles.icon} />
      </TouchableHighlight>
    )
  }
});


module.exports = AddPeopleIcon;
