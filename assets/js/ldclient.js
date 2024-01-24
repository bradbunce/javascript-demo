// LaunchDarkly Client-side ID
var clientID = "65b1610886a168104a999f8e"; /* Development Environment */

var FeatureFlag_css_theme = "css-theme";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const context = {
  kind: 'application',
  key: 'github page',
  date: today
};

const ldclient = LDClient.initialize(clientID, context);