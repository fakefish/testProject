import React from 'react-native';
import Tgitem from './tg';
import styles from '../styles/sh';
import OpenPage from './openpage';

var {
  Text,
  View,
  TouchableOpacity
} = React;
var test = React.createClass({
  render: function() {
    return <Text>123</Text>;
  }
})
var Sh = React.createClass({

  render: function() {
    var sh = this.props.data;
    var navigator = this.props.navigator;
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.shContainer}
          onPress={()=>{
            console.log(navigator)
            // this.props.navigator.push({
            //   name: 'open url',
            //   component: test,
            // })
          }}>
          <Text style={styles.name}>{sh.sh_name}</Text>
          <View style={styles.info}>
            <View style={styles.detail}>
              <Text style={styles.infoText}>star:{sh.sh_star}</Text>
              <Text style={styles.infoText}>{sh.sh_avg}元/人</Text>
              <Text style={[styles.infoText, styles.area]}>{sh.sh_area}</Text>
            </View>
            <Text style={styles.infoText}>{(sh.sh_dis*1000).toFixed(1)}m</Text>
          </View>
        </TouchableOpacity>
        
        <View>
          {sh.tuangou.map((tg) => {
            return <Tgitem 
              data={tg} 
              key={tg.td_id}
              navigator={navigator}/>
          })}
        </View>
      </View>

    );
  }

});

module.exports = Sh;