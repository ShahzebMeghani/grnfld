angular.module('app')
.controller('RegisterCtrl', function ($scope, usersService, $rootScope, $location) {
  $('.alert .close').on('click', function (e) {
    $(this).parent().hide();
  });

  $scope.register = {
    username: '',
    password: ''
  };

  $scope.submit = function (isValid) {
    console.log('hit submit', isValid)
    if (isValid) {
      usersService.register($scope.username, $scope.password, res => {
        if (res.status === 409) {
          console.log('registration error');
          $('#registration-error').show();
        } else {
          console.log('userid', res.data.user_id);
          $rootScope.userId = res.data.user_id;
          $location.path('/');
        }
      });
    }
  };
});
