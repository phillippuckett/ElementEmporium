angular.module('eCommerce')
    .controller('accountController', function ($scope) {
        console.log("Account View");
        $scope.username = 'name';
        $scope.email = 'email';

        $scope.apt = 'apt';
        $scope.street = 'street';
        $scope.city = 'city';
        $scope.state = 'state';
        $scope.zip = 'zip';
        $scope.country = 'country';

        $scope.cardHolder = 'cardHolder';
        $scope.lastFourdigitsOfCard = '0000';
        $scope.mm = 'mm';
        $scope.yyyy = 'yyyy';
        $scope.cardCompany = 'cardCompany';
    });