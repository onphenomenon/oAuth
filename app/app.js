angular.module("oAuth", [
  'googleAuth',
  "factory",
  "ui.router",
  "ui.bootstrap"
])
.config(function($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('google', {
      url: "/google",
      views: {
        'google': {
          templateUrl: "googleAuth/googleAuth.html",
          controller: 'googleAuthController'
        }
      }
    })
    // .state('gallery', {
    //   url: "/gallery",
    //   views: {
    //     'gallery': {
    //       templateUrl: "app/gallery/gallery.html",
    //       controller: 'GalleryController'
    //     }
    //   }

    // })
})

