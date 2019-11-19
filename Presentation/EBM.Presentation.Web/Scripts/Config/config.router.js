'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams, $location) {
      	$rootScope.$state = $state;
      	$rootScope.$stateParams = $stateParams;
      	$rootScope.$location = $location;
      }
    ]
  )
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        var versionData = moment().format('YYYY-MM-DD_HH-mm-ss');
        //var versionData = moment().format('YYYY-MM-DD');
      	//$locationProvider.html5Mode(true);
      	$urlRouterProvider
			.otherwise('app/dashboard');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'pages/app.html?v='+versionData,
                  //resolve: {
                  //    deps: ['$ocLazyLoad',
                  //        function ($ocLazyLoad) {
                  //            return $ocLazyLoad.load(['app/MeanStack/LockMe/lockme.js']);
                  //        }]
                  //}
              })
              .state('app.dashboard', {
                  url: '/dashboard',
                  templateUrl: 'pages/Dashboard/Dashboard.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  controller: 'DashboardController',
                  //controllerAs: null,
                  //template: '<h3>xin chao</h3>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function ($ocLazyLoad) {
                              return $ocLazyLoad.load(['pages/Dashboard/DashboardController.js?v=' + versionData]);
                          }]
                  }
              })
              .state('app.class', {
                  url: '/class',
                  templateUrl: '/pages/class/class.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  //controller: 'DashboardController',
                  //controllerAs: null,
       
              })
              .state('app.detail-class', {
                  url: '/detail-class',
                  templateUrl: '/pages/class/detail-class.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  //controller: 'DashboardController',
                  //controllerAs: null,

              })
              .state('app.feedback', {
                  url: '/feedback',
                  templateUrl: '/pages/class/feedback.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  //controller: 'DashboardController',
                  //controllerAs: null,

              })
              .state('app.learning', {
                  url: '/learning',
                  templateUrl: '/pages/class/learning.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  //controller: 'DashboardController',
                  //controllerAs: null,

              })
              .state('app.myclass-info', {
                  url: '/myclass-info',
                  templateUrl: '/pages/class/myclass-info.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  //controller: 'DashboardController',
                  //controllerAs: null,

              })
              .state('app.toeic-lesson', {
                  url: '/toeic-lesson',
                  templateUrl: '/pages/class/toeic-lesson.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  //controller: 'DashboardController',
                  //controllerAs: null,

              })
              .state('app.learning-result', {
                  url: '/learning-result',
                  templateUrl: '/pages/learning-result/learning-result.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  controller: 'Learning-ResultController',
                  //controllerAs: null,
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function ($ocLazyLoad) {
                              return $ocLazyLoad.load(['pages/learning-result/Learning-ResultController.js?v=' + versionData]);
                          }]
                  }

              })
              .state('app.detail-result', {
                  url: '/detail-result',
                  templateUrl: '/pages/learning-result/detail-result.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  controller: 'Detail-ResultController',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function ($ocLazyLoad) {
                              return $ocLazyLoad.load(['pages/learning-result/Detail-ResultController.js?v=' + versionData]);
                          }]
                  }

              })
              .state('app.vacation-register', {
                  url: '/vacation-register',
                  templateUrl: '/pages/vacation-register/vacation-register.html?v=' + versionData,
                  data: { pageTitle: 'Home' },
                  controller: 'Vacation-RegisterController',
                  //controllerAs: null,
                  //template: '<h3>xin chao</h3>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function ($ocLazyLoad) {
                              return $ocLazyLoad.load(['pages/vacation-register/Vacation-RegisterController.js?v=' + versionData]);
                          }]
                  }
              })

              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.login', {
                  url: '/login',
                  templateUrl: 'pages/login/login.html?v=' + versionData,
              })
              ;
      }]
);