// Author - Josué Paiva | josuepaiva@lavid.ufpb.br

/* recommended */

// main.js

var app = angular.module("minhacidade", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "../partials/index.html"
        });
    });

