'use strict';

// Declare app level module which depends on views, and components
angular.module('myContacts', [
  'ngRoute','firebase','myContacts.contacts'])
    .
config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/contacts',{
        templateUrl:"contacts/contacts.html"
    })
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
