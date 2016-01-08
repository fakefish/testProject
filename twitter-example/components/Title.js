var React = require('react-native');

var {
  Text,
  TextInput,
  StyleSheet
} = React;

var Title = React.createClass({

	render: function() {
		var route = this.props.currentRoute;
		if(route.name == 'Search') {
		  return <TextInput style={styles.input} placeholder="Search Twitter" />
		}
		return <Text style={this.props.style}>{route.name}</Text>;
	}

});

var styles = StyleSheet.create({
  input: {
  	
    backgroundColor: '#fff',
    width: 220,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 4,
    marginLeft: 50,
  }
});

module.exports = Title;