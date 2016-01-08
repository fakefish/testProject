import React from 'react-native';

var {
  WebView,
  Text,
} = React;

var Openpage = React.createClass({

  getInitialState: function() {
    return {
      url: undefined,
      status: 'No Page Loaded',
    };
  },

  render: function() {
    return (
      <Text>123</Text>
    );
  }

});

module.exports = Openpage;