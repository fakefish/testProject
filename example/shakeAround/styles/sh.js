import React from 'react-native';

var {
  StyleSheet,
  PixelRatio,
} = React;
var styles = StyleSheet.create({

  container: {
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {width:4,height:1},
    marginBottom: 11,
    borderTopWidth: 2,
    borderTopColor: '#f89f64'
    // boxShadow: '0 0 4px 1px rgba(0,0,0,0.1)'
  },
  shContainer: {
    padding: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#eaeaea',
  },
  name: {
    fontSize: 16,
  },

  info: {
    marginTop: 4,
    flexDirection: 'row',

  },
  detail: {
    flexDirection: 'row',
    flex: 1,
  },
  infoText: {
    color: '#bbb',
    fontSize: 12,
    lineHeight: 16,
  },
  area: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 2,
    padding: 2,
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 12
  },
});

module.exports = styles;