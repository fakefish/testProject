import React from 'react-native';
import List from './components/rec';
import styles from './styles/list';
import routes from './common/routes';

var {
  View,
  Text,
  Navigator,
  ScrollView,
} = React;

var Rec = React.createClass({

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      x: undefined,
      y: undefined,
      loaded: false,
    };
  },
  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({
          initialPosition,
          x: position.coords.longitude,
          y: position.coords.latitude,
          loaded: true,
        });
      },
      (error) => alert(error.message),
      { timeout: 2000, maximumAge: 1000 }
    );
  },
  // componentWillUnmount: function() {
  //   navigator.geolocation.clearWatch(this.watchID);
  // },
  render: function() {
    return (
      <Navigator
        initialRoute={routes.home}
        renderScene={(route, navigator) => {
          if(this.state.loaded) {
            return (
              <ScrollView style={styles.root}>
                <List 
                  x={this.state.x} 
                  y={this.state.y}
                  navigator={navigator}
                  route={route}/>
              </ScrollView>
            )
          } else {
            return (
              <View style={styles.root}>
                <Text>geting geolocation...</Text>
              </View>
            )
          }
        }}
      />
      
    );
  }

});

module.exports = Rec;