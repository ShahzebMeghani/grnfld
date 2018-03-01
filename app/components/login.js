angular.module('app')
.controller('LoginCtrl', function($scope, usersService, $rootScope, $location) {
  $scope.username = '';
  $scope.password = '';
  $scope.submit = function(isValid) {
    if (isValid) {
      usersService.login($scope.username, $scope.password, res => {
        $rootScope.userId = res.data.user_id;
        $location.path('/');
      });
    }
  };
});