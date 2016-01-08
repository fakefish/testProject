'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Navigator,
  StatusBarIOS,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} = React;

var context;
var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if(index === 0) {
      if(typeof route.leftCorner !== 'undefined') {
        return <route.leftCorner 
          style={styles.navBarLeftButton}
          toRoute={context.onForward}
          currentRoute={route}
          navigator={navigator}
          customAction={context.customAction}/>
      } else {
        return null;
      }
    } else {
      var previousRoute = navState.routeStack[index - 1];
      var BackButton = context.props.backButtonComponent;
      return (
        
          <BackButton 
            style={[styles.navBarText, styles.navBarButtonText]}
            route={route}
            navState={navState}
            navigator={navigator}>
            <Text style={styles.navBarLeftText}>
              {previousRoute.name}
            </Text>
          </BackButton>
        
      );
    }
    
  },

  RightButton: function(route, navigator, index, navState) {
    if(typeof route.rightCorner !== 'undefined') {
      var RightButtons = route.rightCorner;
      return (
        <RightButtons 
          navigator={navigator} 
          currentRoute={context.state.route}
          toRoute={context.onForward}
          customAction={context.customAction}/>
      );
    } else {
      return null;
    }
    
  },

  Title: function(route, navigator, index, navState) {
    var TitleComponent = context.props.titleComponent;
    return (
      <TitleComponent
        style={styles.navBarText}
        navigator={navigator}
        currentRoute={route}
        customAction={context.customAction}/>
    );
  },

};

var Router = React.createClass({

  getInitialState: function() {
    context = this;
    return {
      route: {
        name: null,
        index: null
      },
    }
  },

  renderScene: function(route, navigator) {

    var Content = route.component;

    // Remove the margin of the navigation bar if not using navigation bar
    var extraStyling = {};
    if (this.props.hideNavigationBar) {
      extraStyling.marginTop = 0;
    }
    
    return (
      <View
        style={[styles.container, this.props.bgStyle, extraStyling]}>
        <Content
          route={route}
          navigator={navigator}
        />
      </View>
    )
    
  },

  render: function() {

    // Status bar color
    if (this.props.statusBarColor === "black") {
      StatusBarIOS.setStyle(0);
    } else {
      StatusBarIOS.setStyle(1);
    }

    var navigationBar;

    if (!this.props.hideNavigationBar) {
      navigationBar = <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
        style={[styles.navBarContainer,this.props.headerStyle]}
      />
    }

    return (
      <Navigator
        initialRoute={this.props.firstRoute}
        navigationBar={navigationBar}
        renderScene={this.renderScene}
        onDidFocus={this.onDidFocus}
      />
    )
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 64
  },
  navBarContainer: {
    backgroundColor: '#5589B7'
  },
  navBarText: {
    color: 'white',
    fontSize: 17,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
  },
  navBarLeftText: {
    color: '#fff',
    fontSize: 14,
    alignItems: 'flex-start',
  }
});


module.exports = Router;
