(function () {
    'use strict';

    angular.module('profileApp', [])
    .controller('ProfileController', ['$scope', function ($scope) {

        $scope.profile = {
            fullName: 'John Doe',
            email: 'john.doe@example.com',
            mobile: '9876543210',
            gender: 'Male',
            address: '123 Main Street, City, State - 12345'
        };

        $scope.editProfile = {
            fullName: '',
            email: '',
            mobile: '',
            gender: '',
            address: ''
        };

        $scope.originalProfile = {
            fullName: '',
            email: '',
            mobile: '',
            gender: '',
            address: ''
        };

        $scope.isEditing = false;
        $scope.showSuccessMessage = false;
        $scope.mobilePattern = /^\d{10}$/;

        $scope.startEdit = function () {
            angular.copy($scope.profile, $scope.editProfile);
            angular.copy($scope.profile, $scope.originalProfile);
            $scope.showSuccessMessage = false;
            $scope.isEditing = true;
        };

        $scope.saveProfile = function () {
            if ($scope.profileForm && $scope.profileForm.$invalid) {
                angular.forEach($scope.profileForm.$error, function (fields) {
                    angular.forEach(fields, function (field) {
                        field.$setTouched();
                    });
                });
                return;
            }

            angular.copy($scope.editProfile, $scope.profile);
            angular.copy($scope.editProfile, $scope.originalProfile);
            $scope.isEditing = false;
            $scope.showSuccessMessage = true;

            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.showSuccessMessage = false;
                });
            }, 3000);
        };

        $scope.cancelEdit = function () {
            angular.copy($scope.originalProfile, $scope.profile);
            angular.copy($scope.originalProfile, $scope.editProfile);
            $scope.isEditing = false;
            $scope.showSuccessMessage = false;
        };

    }]);
})();