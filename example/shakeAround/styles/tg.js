import React from 'react-native';

var {
  StyleSheet,
  PixelRatio
} = React;
var styles = StyleSheet.create({

  container: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#eaeaea',
    padding: 10,
    flexDirection: 'row',
  },
  detail: {
    flex: 1,
    marginLeft: 10,
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    color: '#fc6621'
  },
  oldPrice: {
    fontSize: 12,
    color: '#bbb',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  info: {
    flexDirection:'row',
    marginTop: 10,
  },
  type: {
    backgroundColor: '#5acbbf',
    borderRadius: 2,
    color: '#fff',
    fontSize: 10,
    padding: 3
  },
  sales: {
    color: '#bbb',
    fontSize: 12
  },
  tgDetail: {
    flex: 1,
    marginLeft: 10, 
  },
  tuan: {
    backgroundColor: '#fb7832'
  }
});

module.exports = styles;