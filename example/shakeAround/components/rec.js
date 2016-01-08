import React from 'react-native';
import Item from './sh';
import Api from '../Network/api';
import Loading from '../common/Loading';
import styles from '../styles/list';

var {
  Text,
  ScrollView,
} = React;

var List = React.createClass({

  getInitialState: function() {
    return {
      pois: [],
      loaded: false,
    };
  },

  componentDidMount: function() {
    this._getList();
  },

  _getList: function() {
    var x = this.props.x;
    var y = this.props.y;
    fetch(`${Api.getList}&x=116.48933&y=39.98445`)
      .then((response) => response.json())
      .then((responseData) => {
        if(responseData.data.data) {
          this.setState({
            pois: responseData.data.data,
          });
        }
        this.setState({
          loaded: true 
        });
      })
      .done();
  },

  render: function() {
    if(!this.state.loaded) {
      return <Loading />
    }
    return (
      <ScrollView style={styles.container}>
        {this.state.pois.map((item) => {
          return <Item 
            data={item} 
            key={item.sh_id}
            navigator={this.props.navigator}
            route={this.props.route} />
        })}
      </ScrollView>
    );
  }

});

module.exports = List;