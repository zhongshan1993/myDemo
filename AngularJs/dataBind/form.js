var userInfoModule = angular.module('UserInfoModule', []);

userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {
    $scope.userInfo = {
        email: '19943848@qq.com',
        password: '12455',
        autoLogin: true
    }
    $scope.getFormData = function() {
        console.log($scope.userInfo);
    }
    $scope.setFormData = function() {
        $scope.userInfo = {
            email: 'zhongshan@124.com',
            password: 'aaaaaaaa',
            autoLogin: false
        }
    }
    $scope.resetFormData = function() {
        $scope.userInfo = {
            email: '19943848@qq.com',
            password: '12455',
            autoLogin: true
        }
    }
}])
