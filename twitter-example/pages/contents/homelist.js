var React = require('react-native');

var Tweet = require('../../components/Tweet');
var TweetPage = require('../../components/TweetBig');

var {
  View,
  Scroll,
  ScrollView,
  StyleSheet,
} = React;

var Homelist = React.createClass({
  getInitialState: function() {
    return {
      tweets: [
        {
          id: 10001,
          text: "The React Native Router is awesome!",
          user: {
            name: "Tristan Edwards",
            username: "t4t5",
            avatar: "https://pbs.twimg.com/profile_images/497658257276538880/KrPEaVDu_400x400.jpeg"
          },
        },
        {
          id: 10002,
          text: "Hello world!",
          user: {
            name: "Leonard Pauli",
            username: "LeonardPauli",
            avatar: "https://pbs.twimg.com/profile_images/436581173871927296/txEzObgk_400x400.jpeg"
          }
        },
      ]
    }
  },

  goToTweet: function(tweetData) {
    this.props.navigator.push({
      name: "Tweet",
      component: TweetPage,
      data: tweetData
    });
  },
  render: function() {
    return (
      <ScrollView style={styles.container}>
        {this.state.tweets.map((tweetData) => {
          return <Tweet {...tweetData} goToTweet={this.goToTweet} key={tweetData.id} />
        })}
      </ScrollView>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f8fa'
  }
});

module.exports = Homelist;