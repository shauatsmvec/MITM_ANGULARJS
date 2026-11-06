var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.student = {};
    $scope.submitted =  false ;

    $scope.submit = function(){
        $scope.submitted = true;
    };
});


//custom filters

app.filter("uppercase", function() {
    return function(text) {
        return text ? text.toUpperCase() : "";
    };
});

//custom directives

app.directive("highlight", function() {
    return {
        link: function(scope, element) {
            element.css("color", "blue");
        }
    };
});
