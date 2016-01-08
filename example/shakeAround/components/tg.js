import React from 'react-native';
import styles from '../styles/tg';
import OpenPage from './openpage';

var {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} = React;
var Tuangou = React.createClass({

  _fixSales: function(sales) {
    return sales > 10000 ? `${(sales/10000).toFixed(0)}万`:sales;
  },

  _showDetail: function(tg) {
    if(tg.tg_businesstype == '团') {
      return tg.tg_detail;
    } else if(tg.tg_detail_short != '') {
      return tg.tg_detail_short;
    } else {
      return tg.tg_detail;
    }
  },

  render: function() {
    var item = this.props.data;
    var navigator = this.props.navigator;
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={()=>{
          navigator.push({
            name: 'open url',
            component: OpenPage
          })
          // OpenUrl(this.props.data.sbtg_url);
        }}>
        <Image
          style={{width:70,height:48}}
          source={{uri: item.tg_pic}} />
        <View style={styles.detail}>
          <View style={styles.prices}>
            <Text style={styles.price}>￥{item.tg_price}</Text>
            <Text style={styles.oldPrice}>￥{item.tg_oldprice}</Text>
          </View>
          <View style={styles.info}>
            <Text 
              style={[styles.type,item.tg_businesstype=='团'?styles.tuan:'']}>
              {item.tg_businesstype}
            </Text>
            <Text style={styles.tgDetail}>
              {this._showDetail(item)}
            </Text>
            <Text style={styles.sales}>已售{this._fixSales(item.tg_sales)}</Text>
          </View>
        </View>
      </TouchableOpacity>

    );
  }
});


module.exports = Tuangou;