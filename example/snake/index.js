import React from 'react-native'
import Squre from './Squre'
import Snake from './Snake'

let {
  View,
  TouchableOpacity,
  Text,
  StatusBarIOS
} = React;

class SnakeGame extends React.Component {
  constructor(props) {
      super(props);

      StatusBarIOS.setHidden(true, 'none');
  }
  render() {
    return (
      <View>
        {(new Array(10).fill(1)).map(()=><Squre />)}
      </View>
    );
  }
}

module.exports = SnakeGame;