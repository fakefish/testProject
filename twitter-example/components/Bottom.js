var React = require('react-native');
var HomePage = require('../pages/HomePage');
var ContentHomeList = require('../pages/contents/homelist');
var ContentMe = require('../pages/contents/me');
var ContentOther = require('../pages/contents/other');
// var pageRouter = require('../pages/pageRouter');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

var Bottom = React.createClass({

  getInitialState: function() {
    var tab = 'homeTab';
    if(typeof this.props.route.tab != 'undefined') {
      tab = this.props.route.tab;
    }
    return {
      selectedTab: tab,
    };
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor="#5cafec"
        barTintColor="#efefef">
        <TabBarIOS.Item
          title="Home"
          icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
            this.props.navigator.replace(
              require('../pages/pageRouter').home
            )
            // this.props.navigator.replace({
            //   name:'Home',
            //   tab: 'homeTab',
            //   component: require('../pages/HomePage'),
            //   leftCorner: require('../components/icons/AddPeople')
            // })
          }}>
          <ContentHomeList
            route={this.props.route}
            navigator={this.props.navigator}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Other"
          icon={{uri: base64Icon, scale: 3}}
          // badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'otherTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'otherTab',
              notifCount: this.state.notifCount + 1,
            });
            this.props.navigator.replace(
              require('../pages/pageRouter').other
            )
          }}>
          <ContentOther
            route={this.props.route}
            navigator={this.props.navigator}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          // icon={require('./flux.png')}
          icon={{uri: base64Icon, scale: 3}}
          title="Me"
          selected={this.state.selectedTab === 'meTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'meTab',
            });
            this.props.navigator.replace(
              require('../pages/pageRouter').me
            )
          }}>
          <ContentMe
            route={this.props.route}
            navigator={this.props.navigator}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = Bottom;