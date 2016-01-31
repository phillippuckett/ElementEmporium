angular.module('eCommerce')
    .directive('copyrightDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/copyright/copyrightTmpl.html',
            controller: function ($scope) {
                console.log("CopyrightDirCtrl Running");
                var currentDate = new Date().getFullYear();
                $scope.date = currentDate.toString();
            }
        }
    });