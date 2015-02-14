
/*
App Module
 */
var BlogzingaApp, BlogzingaConfiguration;

BlogzingaApp = (function() {
  function BlogzingaApp() {
    return ['ui.router', 'templates', 'bloglist'];
  }

  return BlogzingaApp;

})();

BlogzingaConfiguration = (function() {
  function BlogzingaConfiguration($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/blogzinga/list');
    $stateProvider.state('bloggers', {
      abstract: true,
      url: '/blogzinga',
      views: {
        'template': {
          templateUrl: 'components/home.html'
        }
      }
    });
  }

  return BlogzingaConfiguration;

})();

angular.module('blogzinga', new BlogzingaApp()).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', BlogzingaConfiguration]);


/*
App Module
 */
var BlogList, BlogListApp, BlogListConfiguration, BlogListService, Join, RandomHeader, RandomLabel;

BlogListApp = (function() {
  function BlogListApp() {
    return ['ui.router', 'templates', 'ab-base64'];
  }

  return BlogListApp;

})();

BlogListConfiguration = (function() {
  function BlogListConfiguration($stateProvider) {
    $stateProvider.state('bloggers.list', {
      url: '/list',
      views: {
        '': {
          templateUrl: 'components/bloglist/list.html',
          controller: 'blogListController'
        }
      }
    });
  }

  return BlogListConfiguration;

})();

BlogList = (function() {
  function BlogList($scope, BlogListService, base64) {
    BlogListService.getBlogs().then(function(resp) {
      $scope.blogs = _.sortBy(resp, 'title');
    });
    $scope.openUrl = function(url) {
      return window.open(url);
    };
    $scope.filterByTag = function(tag) {
      return $scope.filterBlog = tag;
    };
  }

  return BlogList;

})();

BlogListService = (function() {
  function BlogListService($http, base64) {
    return {
      getBlogs: function() {
        return $http.get('https://api.github.com/repos/cosenonjaviste/blogzinga/contents/blogs.json?ref=master').then(function(resp) {
          var base64Content;
          base64Content = resp.data.content;
          return angular.fromJson(base64.decode(base64Content));
        });
      }
    };
  }

  return BlogListService;

})();

Join = (function() {
  function Join() {
    return function(value) {
      return typeof value.join === "function" ? value.join(', ') : void 0;
    };
  }

  return Join;

})();

RandomHeader = (function() {
  function RandomHeader() {
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        var classes, random;
        classes = ['panel-primary', 'panel-success', 'panel-warning', 'panel-danger', 'panel-info'];
        random = function() {
          return Math.floor(Math.random() * (classes.length - 1));
        };
        $element.parent().addClass(classes[random()]);
      }
    };
  }

  return RandomHeader;

})();

RandomLabel = (function() {
  function RandomLabel() {
    return {
      restict: 'A',
      link: function($scope, $element, $attrs) {
        var classes, random;
        classes = ['label-primary', 'label-success', 'label-warning', 'label-danger', 'label-info'];
        random = function() {
          return Math.floor(Math.random() * (classes.length - 1));
        };
        return $element.addClass(classes[random()]);
      }
    };
  }

  return RandomLabel;

})();

angular.module('bloglist', new BlogListApp()).config(['$stateProvider', BlogListConfiguration]).controller('blogListController', ['$scope', 'BlogListService', 'base64', BlogList]).factory('BlogListService', ['$http', 'base64', BlogListService]).filter('join', [Join]).directive('randomHeader', [RandomHeader]).directive('randomLabel', [RandomLabel]);

//# sourceMappingURL=maps/app.js.map