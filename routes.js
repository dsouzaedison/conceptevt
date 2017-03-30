/**
 * Created by Edison on 10-08-2016.
 */

var route = angular.module('route', ['ngRoute']);

route.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
        })
        .when("/Home", {
            templateUrl: "templates/home.html"
        })
        .when("/Events", {
            templateUrl: "templates/events.html"
        })
        .when("/Portfolio", {
            templateUrl: "templates/gallery.html"
        })
        .when("/Contact Us", {
            templateUrl: "templates/contactus.html"
        })
        .when("/About", {
            templateUrl: "templates/about.html"
        })
        .otherwise({redirectTo :'/Home'});
});