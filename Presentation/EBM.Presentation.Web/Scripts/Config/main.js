'use strict';

/* Controllers */
angular.module('app')
    .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', '$state', '$http', '$location',
        function ($scope, $translate, $localStorage, $window, $state, $http, $location) {

            window._state = $state;
            // add 'ie' classes to html
            var isIE = !!navigator.userAgent.match(/MSIE/i);
            isIE && angular.element($window.document.body).addClass('ie');
            isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

            function isSmartDevice($window) {
                // Adapted from http://www.detectmobilebrowsers.com
                var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
            }


        }
    ]);
