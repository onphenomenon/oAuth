angular.module("googleAuth", ['ui.bootstrap'])

.controller("googleAuthController", function ($timeout, $scope, $rootScope, $location, $window, Auth){
  $scope.user = {};
  $scope.user["pattern"] = /^\d{5}(?:[-\s]\d{4})?$/

  $scope.googleSignin = function () {
    console.log("Google sign in clicked");
    Auth.googleSignin()
      // .then(function (authResult) {
      //   console.log(authResult);
      //   $rootScope.currentUser = authResult;
      //   $timeout(function () {
      //     $location.path("/google");
      //     }, 0);

      //   $scope.user = {};

      // })
  };
  $scope.linkedSignin = function () {
    console.log("Linked In sign in clicked");

    Auth.linkedSignin()
      // .then(function (authResult) {
      //   console.log(authResult);
      //   $rootScope.currentUser = authResult;
      //   $timeout(function () {
      //     $location.path("/google");
      //     }, 0);

      //   $scope.user = {};

      // })
  };

  $scope.request = {
      'calendarId': 'primary',
      'maxResults': 10
    }

  $scope.getEvents = function () {
      console.log("getEventsClicked");
      // Auth.checkAuth()
      // .then(function() {
          Auth.listEvents($scope.request);
      // })
  }

  // $scope.signout = function () {
  //   delete $rootScope.currentUser;
  //   Auth.signout();
  //   $location.path("/signin");
  // };


});
