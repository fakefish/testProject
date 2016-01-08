var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
} = React;

var Animate = React.createClass({

  componentWillMount: function() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  },

  getInitialState: function() {
    return {
      w: 100,
      h: 100
    };
  },

  _onPress() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      w: this.state.w + 15,
      h: this.state.h + 15
    });
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touch</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'red',
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }
})

module.exports = Animate;