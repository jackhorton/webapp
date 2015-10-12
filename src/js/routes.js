import {app} from './bootstrap';

app.config(['$stateProvider', '$urlRouterProvider',
      ($stateProvider, $urlRouterProvider) => {
          $urlRouterProvider.otherwise('/');

          $stateProvider
              .state('home', {
                  url: '/',
                  templateUrl: 'templates/home.html',
                  controller: 'HomeController'
              })
          .state('login', {
              url: '/login',
              templateUrl: 'templates/login.html'
          });
      }]);