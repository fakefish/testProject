import React from 'react-native';

var {
  Text,
  View,
} = React;

var RecList = React.createClass({
  watchID: (null: ?number),

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown'
    };
  },
  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      { timeout: 2000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    })
  },
  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },
  render: function() {
    return (
      <View style={{marginTop: 20}}>
        <View>
          <Text>initialPosition: {this.state.initialPosition}</Text>
        </View>
        <View>
          <Text>currentPosition: {this.state.lastPosition}</Text>
        </View>
      </View>
    );
  }
})


module.exports = RecList;
