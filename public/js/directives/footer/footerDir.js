angular.module('eCommerce')
    .directive('footerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/footer/footerTmpl.html',
            controller: function ($scope) {
                console.log("Footer Directive");
                var currentDate = new Date().getFullYear();
                $scope.date = currentDate.toString();
            }
        }
    });