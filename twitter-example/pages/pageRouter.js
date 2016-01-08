
var HomePage = require('./HomePage');
var AddPeople = require('../components/icons/AddPeople');
var FindPeoplePage = require('./FindPeoplePage');
var SearchAndCompose = require('../components/icons/SearchAndCompose');

module.exports = {
  home: {
    name: 'Home',
    tab: 'homeTab',
    component: HomePage,
    leftCorner: AddPeople,
    rightCorner: require('../components/icons/SearchAndCompose')
  },
  other: {
    name: 'Other',
    tab: 'otherTab',
    component: require('../pages/HomePage'),
    rightCorner: require('../components/icons/Search')
  },
  me: {
    name: 'Me',
    tab: 'meTab',
    component: require('../pages/HomePage'),
    rightCorner: require('../components/icons/Search')
  },
  findPeople: {
  	name: "addPeople",
  	title: 'Add people',
  	component: FindPeoplePage
  }
}